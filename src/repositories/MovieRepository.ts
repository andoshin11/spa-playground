import Store, { StoreFactory } from '@/store'
import {
  StoreItem,
  ResetItem,
  StoreMovies,
  ResetMovies,
  StorePopularMovies,
  StoreGenres
} from '@/store/modules/movie/types'
import { APIClient } from '@/infra/network/APIClient'
import { GetPopularMovies, GetGenres } from '@/infra/network/api/Movie'
import MovieEntity, { IMovieProps, Genre } from '@/entities/Movie'

export default class MovieRepository {
  private _store: typeof Store

  constructor(store: typeof Store) {
    this._store = store
  }

  async fetchPopularMovies(): Promise<IMovieProps[]> {
    return await APIClient.shared.request(new GetPopularMovies({}))
  }

  async fetchGenres(): Promise<Genre[]> {
    return await APIClient.shared.request(new GetGenres())
  }

  saveItem(item: IMovieProps) {
    this._store.commit(new StoreItem(item))
  }

  resetItem() {
    this._store.commit(new ResetItem())
  }

  getItem(): MovieEntity | null {
    const Item = this._store.state.movie.item
    return Item ? new MovieEntity(Item) : null
  }

  saveMovies(movies: IMovieProps[]) {
    this._store.commit(new StoreMovies(movies))
  }

  resetMovies() {
    this._store.commit(new ResetMovies())
  }

  savePopularMovies(movies: IMovieProps[]) {
    const ids = movies.map(movie => movie.id)

    this._store.commit(new StoreMovies(movies))
    this._store.commit(new StorePopularMovies(ids))
  }

  saveGenres(genres: Genre[]) {
    this._store.commit(new StoreGenres(genres))
  }

  getPopularMovies(): MovieEntity[] {
    const ids = this._store.state.movie.popularMovies
    const propsList = ids.map(id => this._store.state.movie.byIds[id])
    const genres = this._store.state.movie.genres
    const movies = propsList.map(
      props => new MovieEntity(props, props.genre_ids.map(id => genres[id]))
    )

    return movies
  }
}

export const MovieRepositoryFactory = (): MovieRepository => {
  return new MovieRepository(StoreFactory())
}
