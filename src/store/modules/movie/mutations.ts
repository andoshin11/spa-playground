import { MutationTree } from 'vuex'
import { IMovieState, initialState } from '@/store/modules/movie/state'
import { Types, StoreMovies, StorePopularMovies, StoreCurrentMovie, StoreGenres } from '@/store/modules/movie/types'

export const mutations: MutationTree<IMovieState> = {
  [Types.STORE_MOVIES]: (state, action: StoreMovies) => {
    const movies = action.payload
    movies.forEach(movie => {
      state.byIds = {
        ...state.byIds,
        [movie.id]: movie
      }
    })
  },
  [Types.RESET_MOVIES]: state => {
    const { byIds } = initialState()
    state.byIds = byIds
  },
  [Types.STORE_POPULAR_MOVIES]: (state, action: StorePopularMovies) => {
    const popularMovies = action.payload
    state.popularMovies = popularMovies
  },
  [Types.STORE_GENRES]: (state, action: StoreGenres) => {
    const genres = action.payload
    genres.forEach(genre => {
      state.genres = {
        ...state.genres,
        [genre.id]: genre
      }
    })
  },
  [Types.STORE_CURRENT_MOVIE]: (state, action: StoreCurrentMovie) => {
    const movie = action.payload
    const id = movie.id
    state.byIds = {
      ...state.byIds,
      [id]: movie
    }
    state.currentMovie = id
  }
}
