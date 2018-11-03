import * as sinon from 'sinon'

import UseCase, { IFetchPopularMoviesUseCase } from '@/usecases/movies/FetchPopularMoviesUseCase'
import { MovieFactory } from '@/entities/Movie'
import { MovieDBGatewayFactory } from '@/gateways/MovieDB'
import { MovieRepositoryFactory } from '@/repositories/MovieRepository'
import { ErrorServiceFactory } from '@/services/ErrorService'

describe('FetchPopularMovies UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const movieDBGateway = MovieDBGatewayFactory()
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const movie = MovieFactory()
    const movies = Array(10)
      .fill(0)
      .map(_ => movie.props)

    // Prepare
    const fetchPopularMoviesStub = sinon
      .stub(movieDBGateway, 'fetchPopularMovies')
      .onFirstCall()
      .resolves(movies)
    const savePopularMoviesStub = sinon.stub(movieRepository, 'savePopularMovies')
    const handleStub = sinon.stub(errorService, 'handle')

    const props: IFetchPopularMoviesUseCase = {
      movieDBGateway: movieDBGateway,
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

  test('should handle error correctly', async () => {
    // Given
    const movieDBGateway = MovieDBGatewayFactory()
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const errorMessage = 'Some error occured.'

    // Prepare
    const fetchPopularMoviesStub = sinon.stub(movieDBGateway, 'fetchPopularMovies').rejects(errorMessage)
    const savePopularMoviesSpy = sinon.spy(movieRepository, 'savePopularMovies')
    const handleStub = sinon.stub(errorService, 'handle')

    const props: IFetchPopularMoviesUseCase = {
      movieDBGateway: movieDBGateway,
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    try {
      await usecase.execute()
    } catch (e) {} // eslint-disable-line

    // Then
    expect(fetchPopularMoviesStub.calledOnce).toBe(true)
    expect(savePopularMoviesSpy.notCalled).toBe(true)
    expect(handleStub.calledOnce).toBe(true)
    expect(handleStub.calledImmediatelyAfter(fetchPopularMoviesStub)).toBe(true)
  })
})
