import MovieRepository from '@/repositories/MovieRepository'
import ErrorService from '@/services/ErrorService'

export interface IFetchPopularMoviesUseCase {
  movieRepository: MovieRepository
  errorService: ErrorService
}

export default class FetchPopularMoviesUseCase implements BaseUseCase {
  movieRepository: MovieRepository
  errorService: ErrorService

  constructor({ movieRepository, errorService }: IFetchPopularMoviesUseCase) {
    this.movieRepository = movieRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const response = await this.movieRepository.fetchPopularMovies()
      this.movieRepository.savePopularMovies(response)
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
