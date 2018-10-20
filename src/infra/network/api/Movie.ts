import { AxiosResponse } from 'axios'
import { APIRequest } from '@/infra/network/APIRequest'
import { HTTPMethod } from '@/infra/network/APIClient'
import { IMovieProps } from '@/entities/Movie'

export interface GetPopularMoviesRequest {}

export class GetPopularMovies implements APIRequest<IMovieProps[]> {
  response: IMovieProps[] = []
  path = '/movie/popular'
  method = HTTPMethod.GET
  parse = (data: AxiosResponse) => data.data
  constructor(public params: GetPopularMoviesRequest) {}
}

export class GetMovie implements APIRequest<IMovieProps> {
  response: IMovieProps = null
  path: string
  method = HTTPMethod.GET
  parse = (data: AxiosResponse) => data.data
  constructor(id: number) {
    this.path = `/api/movie/${id}`
  }
}
