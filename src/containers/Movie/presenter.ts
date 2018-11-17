import MovieEntity from '@/entities/Movie'
import MovieRepository from '@/repositories/MovieRepository'

export interface IPresenterParams {
  movieRepository: MovieRepository
}

export interface IPresenter {
  movie: MovieEntity | null
}

export default ({ movieRepository }: IPresenterParams): IPresenter => {
  return {
    movie: movieRepository.getCurrentMovie()
  }
}
