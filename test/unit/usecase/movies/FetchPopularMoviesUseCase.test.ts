import * as sinon from 'sinon'

import UseCase, {
  IFetchPopularMoviesUseCase
} from '@/usecases/movies/FetchPopularMoviesUseCase'
import { MovieFactory } from '@/entities/Movie'
import { MovieRepositoryFactory } from '@/repositories/MovieRepository'
import { ErrorServiceFactory } from '@/services/ErrorService'

describe('FetchPopularMovies UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const movie = MovieFactory()
    const movies = Array(10)
      .fill(0)
      .map(_ => movie.props)

    // Prepare
    const fetchPopularMoviesStub = sinon
      .stub(movieRepository, 'fetchPopularMovies')
      .onFirstCall()
      .resolves(movies)
    const savePopularMoviesStub = sinon.stub(
      movieRepository,
      'savePopularMovies'
    )
    const handleStub = sinon.stub(errorService, 'handle')

    const props: IFetchPopularMoviesUseCase = {
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    await usecase.execute()

    // Then
    expect(fetchPopularMoviesStub.calledOnce).toBe(true)
    expect(savePopularMoviesStub.withArgs(movies).calledOnce).toBe(true)
    expect(savePopularMoviesStub.calledAfter(fetchPopularMoviesStub)).toBe(true)
    expect(handleStub.notCalled).toBe(true)
  })
})
