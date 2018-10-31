import MovieRepository from '@/repositories/MovieRepository'
import ErrorService from '@/services/ErrorService'

export interface IFetchGenresUseCase {
  movieRepository: MovieRepository
  errorService: ErrorService
}

export default class FetchGenresUseCase implements BaseUseCase {
  movieRepository: MovieRepository
  errorService: ErrorService

  constructor({ movieRepository, errorService }: IFetchGenresUseCase) {
    this.movieRepository = movieRepository
    this.errorService = errorService
  }

  async execute() {
    try {
      const response = await this.movieRepository.fetchGenres()
      this.movieRepository.saveGenres(response)
    } catch (error) {
      await this.errorService.handle(error)
      throw new Error(error)
    }
  }
}
