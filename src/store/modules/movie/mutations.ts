import { MutationTree } from 'vuex'
import { IMovieState, initialState } from '@/store/modules/movie/state'
import {
  Types,
  StoreMovies,
  StorePopularMovies,
  StoreItem
} from '@/store/modules/movie/types'

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
  [Types.STORE_ITEM]: (state, action: StoreItem) => {
    const item = action.payload
    state.item = item
  },
  [Types.RESET_ITEM]: state => {
    const { item } = initialState()
    state.item = item
  }
}
