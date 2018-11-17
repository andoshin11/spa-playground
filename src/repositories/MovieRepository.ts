import Store, { StoreFactory } from '@/store'
import { StoreMovies, ResetMovies, StorePopularMovies, StoreGenres, StoreCurrentMovie } from '@/store/modules/movie/types'
import MovieEntity, { IMovieProps, Genre } from '@/entities/Movie'

export default class MovieRepository {
  private _store: typeof Store

  constructor(store: typeof Store) {
    this._store = store
  }

  saveMovies(movies: IMovieProps[]) {
    this._store.commit(new StoreMovies(movies))
  }

  resetMovies() {
    this._store.commit(new ResetMovies())
  }

  applyGenre(movie: IMovieProps): IMovieProps {
    const genre_ids = movie.genre_ids
    const genres = this._store.state.movie.genres
    movie.genres = genre_ids.map(id => genres[id])
    return movie
  }

  savePopularMovies(movies: IMovieProps[]) {
    const ids = movies.map(movie => movie.id)
    movies.forEach(movie => this.applyGenre(movie))

    this._store.commit(new StoreMovies(movies))
    this._store.commit(new StorePopularMovies(ids))
  }

  saveCurrentMovie(movie: IMovieProps) {
    this._store.commit(new StoreCurrentMovie(movie))
  }

  saveGenres(genres: Genre[]) {
    this._store.commit(new StoreGenres(genres))
  }

  getPopularMovies(): MovieEntity[] {
    const ids = this._store.state.movie.popularMovies
    const propsList = ids.map(id => this._store.state.movie.byIds[id])
    const genres = this._store.state.movie.genres
    const movies = propsList.map(props => new MovieEntity(props))

    return movies
  }
}

export const MovieRepositoryFactory = (): MovieRepository => {
  return new MovieRepository(StoreFactory())
}
