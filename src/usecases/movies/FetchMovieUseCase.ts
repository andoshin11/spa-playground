import MovieDBGateway from '@/gateways/MovieDB'
import MovieRepository from '@/repositories/MovieRepository'
import ErrorService from '@/services/ErrorService'

export interface IFetchMovieUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService
}

export default class FetchMovieUseCase implements BaseUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService

  constructor({ errorService, movieRepository, movieDBGateway }: IFetchMovieUseCase) {
    this.movieDBGateway = movieDBGateway
    this.movieRepository = movieRepository
    this.errorService = errorService
  }

  async execute(id: number) {
    try {
      const response = await this.movieDBGateway.fetchMovie(id)
      this.movieRepository.saveCurrentMovie(response)
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
