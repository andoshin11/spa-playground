import * as sinon from 'sinon'

import UseCase, { IFetchMovieUseCase } from '@/usecases/movies/FetchMovieUseCase'
import { MoviePropsFactory } from '@/entities/Movie'
import { MovieRepositoryFactory } from '@/repositories/MovieRepository'
import { MovieDBGatewayFactory } from '@/gateways/MovieDB'
import { ErrorServiceFactory } from '@/services/ErrorService'

describe('FetchMovie UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const movieDBGateway = MovieDBGatewayFactory()
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const movieProps = MoviePropsFactory()

    // Prepare
    const fetchMovieStub = sinon
      .stub(movieDBGateway, 'fetchMovie')
      .onFirstCall()
      .resolves(movieProps)
    const saveCurrentMovieStub = sinon.stub(movieRepository, 'saveCurrentMovie')
    const handleSpy = sinon.spy(errorService, 'handle')

    const props: IFetchMovieUseCase = {
      movieDBGateway: movieDBGateway,
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    await usecase.execute(1)

    // Then
    expect(fetchMovieStub.withArgs(1).calledOnce).toBe(true)
    expect(saveCurrentMovieStub.withArgs(movieProps).calledOnce).toBe(true)
    expect(saveCurrentMovieStub.calledImmediatelyAfter(fetchMovieStub)).toBe(true)
    expect(handleSpy.notCalled).toBe(true)
  })

  test('should handle error correctly', async () => {
    // Given
    const movieDBGateway = MovieDBGatewayFactory()
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const errorMessage = 'Some error occured.'

    // Prepare
    const fetchMovieStub = sinon.stub(movieDBGateway, 'fetchMovie').rejects(errorMessage)
    const saveCurrentMovieStub = sinon.spy(movieRepository, 'saveCurrentMovie')
    const handleStub = sinon.stub(errorService, 'handle')

    const props: IFetchMovieUseCase = {
      movieDBGateway: movieDBGateway,
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    try {
      await usecase.execute(1)
    } catch (e) {} // eslint-disable-line

    // Then
    expect(fetchMovieStub.withArgs(1).calledOnce).toBe(true)
    expect(saveCurrentMovieStub.notCalled).toBe(true)
    expect(handleStub.calledOnce).toBe(true)
    expect(handleStub.calledImmediatelyAfter(fetchMovieStub)).toBe(true)
  })
})
