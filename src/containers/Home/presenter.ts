import MovieEntity from '@/entities/Movie'
import MovieRepository from '@/repositories/MovieRepository'

export interface IPresenterParams {
  movieRepository: MovieRepository
}

export interface IPresenter {
  popularMovies: MovieEntity[]
}

export default ({ movieRepository }: IPresenterParams): IPresenter => {
  const popularMovies = movieRepository.getPopularMovies()
  return {
    popularMovies
  }
}
