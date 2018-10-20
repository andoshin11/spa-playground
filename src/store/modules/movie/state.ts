import { IMovieProps } from '@/entities/Movie'

export interface IMovieState {
  items: IMovieProps[]
  item: IMovieProps | null
}

export const initialState = (): IMovieState => ({
  items: [],
  item: null
})
