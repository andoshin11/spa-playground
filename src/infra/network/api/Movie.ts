import { AxiosResponse } from 'axios'
import { APIRequest } from '@/infra/network/APIRequest'
import { HTTPMethod } from '@/infra/network/APIClient'
import { IMovieProps, Genre } from '@/entities/Movie'

export interface IPaginationResponse<T> {
  page: number
  total_results: number
  total_pages: number
  results: T
}

export interface GetPopularMoviesRequest {}

export class GetPopularMovies implements APIRequest<IMovieProps[]> {
  response: IMovieProps[] = []
  path = '/movie/popular'
  method = HTTPMethod.GET
  parse = (data: AxiosResponse) => {
    const axiosResponse = data.data as IPaginationResponse<IMovieProps[]>
    return axiosResponse.results
  }
  constructor(public params: GetPopularMoviesRequest) {}
}

export class GetMovie implements APIRequest<IMovieProps> {
  response: IMovieProps = null
  path: string
  method = HTTPMethod.GET
  parse = (data: AxiosResponse) => data.data
  constructor(id: number) {
    this.path = `/movie/${id}`
  }
}

export class GetGenres implements APIRequest<Genre[]> {
  response: Genre[] = []
  path = '/genre/movie/list'
  method = HTTPMethod.GET
  parse = (data: AxiosResponse) => {
    const axiosResponse = data.data as { genres: Genre[] }
    return axiosResponse.genres
  }
}
