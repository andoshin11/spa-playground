import { IMovieProps, Genre } from '@/entities/Movie'

export interface IMovieState {
  byIds: {
    [id: number]: IMovieProps
  }
  popularMovies: number[]
  currentMovie: number | null
  genres: { [id in Genre['id']]: Genre }
}

export const initialState = (): IMovieState => ({
  byIds: {},
  popularMovies: [],
  currentMovie: null,
  genres: {}
})
