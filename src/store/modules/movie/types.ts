import { IMovieProps } from '@/entities/Movie'

export enum Types {
  STORE_ITEM = 'movie/store_item',
  RESET_ITEM = 'movie/reset_item',
  REMOVE_ITEM = 'movie/remove_item',
  STORE_MOVIES = 'movie/store_movies',
  RESET_MOVIES = 'movie/reset_movies',
  STORE_POPULAR_MOVIES = 'movie/store_popular_movies'
}

export class StoreItem implements FluxStandardAction {
  type = Types.STORE_ITEM
  constructor(public payload: IMovieProps) {}
}

export class ResetItem implements FluxStandardAction {
  type = Types.RESET_ITEM
  payload = null
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
