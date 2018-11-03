import { IMovieProps, Genre } from '@/entities/Movie'

export interface IMovieState {
  item: IMovieProps | null
  byIds: {
    [id: number]: IMovieProps
  }
  popularMovies: number[]
  genres: { [id in Genre['id']]: Genre }
}

export const initialState = (): IMovieState => ({
  item: null,
  byIds: {},
  popularMovies: [],
  genres: {}
})
