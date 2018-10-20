import Vue from 'vue'
import Vuex from 'vuex'

// modules
import * as movie from '@/store/modules/movie'

Vue.use(Vuex)

export interface RootState {
  movie: movie.IMovieState
}

export default new Vuex.Store<RootState>({
  modules: {
    movie: movie.store
  }
})
