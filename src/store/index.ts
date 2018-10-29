import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as movie from '@/store/modules/movie'

Vue.use(Vuex)

export interface RootState {
  movie: movie.IMovieState
}

const Store = new Vuex.Store<RootState>({
  modules: {
    movie: movie.store
  }
})

export default Store

export const StoreFactory = (): typeof Store => {
  return new Vuex.Store<RootState>({})
}
