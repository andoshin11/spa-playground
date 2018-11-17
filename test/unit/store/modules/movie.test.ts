import { mutations } from '@/store/modules/movie/mutations'
import { initialState } from '@/store/modules/movie/state'
import { Types, StoreMovies, ResetMovies, StorePopularMovies, StoreGenres, StoreCurrentMovie } from '@/store/modules/movie/types'
import { MoviePropsFactory, GenresFactory } from '@/entities/Movie'

describe('Vues module: movie', () => {
  describe('Mutations', () => {
    test('STORE_MOVIES should add new record to byIds', () => {
      const state = initialState()
      const movie = MoviePropsFactory()

      expect(state.byIds).toEqual({})
      mutations[Types.STORE_MOVIES](state, new StoreMovies([movie]))
      expect(state.byIds).toEqual({ [movie.id]: movie })
    })

    test('RESET_MOVIES should clear byIds', () => {
      const state = initialState()
      const movie = MoviePropsFactory()
      state.byIds[movie.id] = movie

      expect(state.byIds).toEqual({ [movie.id]: movie })
      mutations[Types.RESET_MOVIES](state, new ResetMovies())
      expect(state.byIds).toEqual({})
    })

    test('STORE_POPULAR_MOVIES should store list of ids', () => {
      const state = initialState()
      const ids = [1, 2, 3, 4, 5]

      expect(state.popularMovies).toEqual([])
      mutations[Types.STORE_POPULAR_MOVIES](state, new StorePopularMovies(ids))
      expect(state.popularMovies).toEqual([1, 2, 3, 4, 5])
    })

    test('STORE_GENRES should store list of ids', () => {
      const state = initialState()
      const genres = GenresFactory()

      expect(state.genres).toEqual({})
      mutations[Types.STORE_GENRES](state, new StoreGenres(genres))
      expect(state.genres).toEqual(genres.reduce((hash, genre) => ((hash[genre.id] = genre), hash), {}))
    })

    test('STORE_CURRENT_MOVIE should update byIds and currentMovie slot', () => {
      const state = initialState()
      const movie = MoviePropsFactory()

      expect(state.byIds).toEqual({})
      expect(state.currentMovie).toBe(null)

      mutations[Types.STORE_CURRENT_MOVIE](state, new StoreCurrentMovie(movie))

      expect(state.byIds).toEqual({ [movie.id]: movie })
      expect(state.currentMovie).toBe(movie.id)
    })
  })
})
