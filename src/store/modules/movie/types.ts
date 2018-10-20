import { IMovieProps } from '@/entities/Movie'

export enum Types {
  STORE_ITEMS = 'movie/store_items',
  RESET_ITEMS = 'movie/reset_items',
  STORE_ITEM = 'movie/store_item',
  RESET_ITEM = 'movie/reset_item',
  REMOVE_ITEM = 'movie/remove_item'
}

export class StoreItems implements FluxStandardAction {
  type = Types.STORE_ITEMS
  constructor(public payload: IMovieProps[]) {}
}

export class ResetItems implements FluxStandardAction {
  type = Types.RESET_ITEMS
  payload = null
}

export class StoreItem implements FluxStandardAction {
  type = Types.STORE_ITEM
  constructor(public payload: IMovieProps) {}
}

export class ResetItem implements FluxStandardAction {
  type = Types.RESET_ITEM
  payload = null
}
