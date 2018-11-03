import MovieDBGateway from '@/gateways/MovieDB'
import MovieRepository from '@/repositories/MovieRepository'
import ErrorService from '@/services/ErrorService'

export interface IFetchPopularMoviesUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService
}

export default class FetchPopularMoviesUseCase implements BaseUseCase {
  movieDBGateway: MovieDBGateway
  movieRepository: MovieRepository
  errorService: ErrorService

  constructor({ movieRepository, errorService, movieDBGateway }: IFetchPopularMoviesUseCase) {
    this.movieDBGateway = movieDBGateway
    this.movieRepository = movieRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const response = await this.movieDBGateway.fetchPopularMovies()
      this.movieRepository.savePopularMovies(response)
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
