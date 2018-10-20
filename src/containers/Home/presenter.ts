import MovieEntity from '@/entities/Movie'
import MovieRepository from '@/repositories/MovieRepository'

export interface PresenterParams {
  movieRepository: MovieRepository
}

export interface IPresenter {
  popularMovies: MovieEntity[]
}

export default ({ movieRepository }: PresenterParams): IPresenter => {
  const popularMovies = movieRepository.getPopularMovies()
  return {
    popularMovies
  }
}
