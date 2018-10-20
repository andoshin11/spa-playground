import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from '@/store/modules/movie/mutations'
import { IMovieState, initialState } from '@/store/modules/movie/state'

export * from '@/store/modules/movie/state'

export const store: Module<IMovieState, RootState> = {
  state: initialState,
  mutations
}
