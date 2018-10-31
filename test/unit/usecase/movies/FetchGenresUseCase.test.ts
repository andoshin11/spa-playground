import * as sinon from 'sinon'

import UseCase, {
  IFetchGenresUseCase
} from '@/usecases/movies/FetchGenresUseCase'
import { MovieFactory, GenresFactory } from '@/entities/Movie'
import { MovieRepositoryFactory } from '@/repositories/MovieRepository'
import { ErrorServiceFactory } from '@/services/ErrorService'

describe('FetchGenresUseCase UseCase', () => {
  test('should be executed correctly', async () => {
    // Given
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const genres = GenresFactory()

    // Prepare
    const fetchGenresStub = sinon
      .stub(movieRepository, 'fetchGenres')
      .onFirstCall()
      .resolves(genres)
    const saveGenresStub = sinon.stub(movieRepository, 'saveGenres')
    const handleSpy = sinon.spy(errorService, 'handle')

    const props: IFetchGenresUseCase = {
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    await usecase.execute()

    // Then
    expect(fetchGenresStub.calledOnce).toBe(true)
    expect(saveGenresStub.withArgs(genres).calledOnce).toBe(true)
    expect(saveGenresStub.calledImmediatelyAfter(fetchGenresStub)).toBe(true)
    expect(handleSpy.notCalled).toBe(true)
  })

  test('should handle error correctly', async () => {
    // Given
    const movieRepository = MovieRepositoryFactory()
    const errorService = ErrorServiceFactory()
    const errorMessage = 'Some error occured.'

    // Prepare
    const fetchGenresStub = sinon
      .stub(movieRepository, 'fetchGenres')
      .rejects(errorMessage)
    const saveGenresSpy = sinon.spy(movieRepository, 'saveGenres')
    const handleStub = sinon.stub(errorService, 'handle')

    const props: IFetchGenresUseCase = {
      movieRepository: movieRepository,
      errorService: errorService
    }

    // Execute
    const usecase = new UseCase(props)
    try {
      await usecase.execute()
    } catch (e) {} // eslint-disable-line

    // Then
    expect(fetchGenresStub.calledOnce).toBe(true)
    expect(saveGenresSpy.notCalled).toBe(true)
    expect(handleStub.calledOnce).toBe(true)
    expect(handleStub.calledImmediatelyAfter(fetchGenresStub)).toBe(true)
  })
})
