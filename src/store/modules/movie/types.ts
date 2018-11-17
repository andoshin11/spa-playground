import { IMovieProps, Genre } from '@/entities/Movie'

export enum Types {
  STORE_MOVIES = 'movie/store_movies',
  RESET_MOVIES = 'movie/reset_movies',
  STORE_POPULAR_MOVIES = 'movie/store_popular_movies',
  STORE_GENRES = 'movie/store_genres',
  STORE_CURRENT_MOVIE = 'movie/store_curent_movie'
}

export class StoreCurrentMovie implements FluxStandardAction {
  type = Types.STORE_CURRENT_MOVIE
  constructor(public payload: IMovieProps) {}
}

export class StoreMovies implements FluxStandardAction {
  type = Types.STORE_MOVIES
  constructor(public payload: IMovieProps[]) {}
}

export class ResetMovies implements FluxStandardAction {
  type = Types.RESET_MOVIES
  payload = null
}

export class StorePopularMovies implements FluxStandardAction {
  type = Types.STORE_POPULAR_MOVIES
  constructor(public payload: number[]) {}
}

export class StoreGenres implements FluxStandardAction {
  type = Types.STORE_GENRES
  constructor(public payload: Genre[]) {}
}
