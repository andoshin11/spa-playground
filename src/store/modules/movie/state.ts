import { IMovieProps } from '@/entities/Movie'

export interface IMovieState {
  item: IMovieProps | null
  byIds: {
    [id: number]: IMovieProps
  }
  popularMovies: number[]
}

export const initialState = (): IMovieState => ({
  item: null,
  byIds: {},
  popularMovies: []
})
