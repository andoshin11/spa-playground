import { APIClient } from '@/infra/network/APIClient'
import { GetPopularMovies, GetGenres } from '@/infra/network/api/Movie'
import { IMovieProps, Genre } from '@/entities/Movie'

export default class MovieDBGateway {
  async fetchPopularMovies(): Promise<IMovieProps[]> {
    return await APIClient.shared.request(new GetPopularMovies({}))
  }

  async fetchGenres(): Promise<Genre[]> {
    return await APIClient.shared.request(new GetGenres())
  }
}

export const MovieDBGatewayFactory = (): MovieDBGateway => {
  return new MovieDBGateway()
}
