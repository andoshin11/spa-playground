import MovieEntity, { MoviePropsFactory, GenresFactory, Genre } from '@/entities/Movie'
import { MovieRepositoryFactory } from '@/repositories/MovieRepository'

describe('MovieRepository', () => {
  test('should be able to save and get currentMovie', () => {
    const movie = MoviePropsFactory()
    const repository = MovieRepositoryFactory()

    expect(repository.getCurrentMovie()).toBe(null)

    repository.saveCurrentMovie(movie)

    expect(repository.getCurrentMovie().props).toEqual(movie)
  })

  test('should be able to save and get popularMovies', () => {
    const movie = MoviePropsFactory()
    const repository = MovieRepositoryFactory()

    expect(repository.getPopularMovies()).toEqual([])

    repository.savePopularMovies([movie])

    expect(repository.getPopularMovies()).toEqual([new MovieEntity(movie)])
  })

  test('should be able to save and get genres', () => {
    const genres = GenresFactory()
    const repository = MovieRepositoryFactory()

    const compare = (a: Genre, b: Genre): number => {
      const A = a.id
      const B = b.id

      let comparison = 0
      if (A > B) {
        comparison = 1
      } else if (A < B) {
        comparison = -1
      }
      return comparison
    }

    expect(repository.getGenres()).toEqual([])

    repository.saveGenres(genres)

    expect(repository.getGenres().sort(compare)).toEqual(genres.sort(compare))
  })

  test('should be able to save and get movies', () => {
    const movie = MoviePropsFactory()
    const repository = MovieRepositoryFactory()

    repository.resetMovies()

    expect(repository.getMovies()).toEqual([])

    repository.saveMovies([movie])

    expect(repository.getMovies()).toEqual([new MovieEntity(movie)])
  })
})
