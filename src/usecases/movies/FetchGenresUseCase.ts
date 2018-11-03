import MovieDBGateway from '@/gateways/MovieDB'
import MovieRepository from '@/repositories/MovieRepository'
import ErrorService from '@/services/ErrorService'

export interface IFetchGenresUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService
}

export default class FetchGenresUseCase implements BaseUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService

  constructor({ movieRepository, errorService, movieDBGateway }: IFetchGenresUseCase) {
    this.movieDBGateway = movieDBGateway
    this.movieRepository = movieRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const response = await this.movieDBGateway.fetchGenres()
      this.movieRepository.saveGenres(response)
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
