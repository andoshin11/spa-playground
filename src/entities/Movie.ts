export type GenreId = number

export interface IMovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: GenreId[]
  id: number
  original_language: string
  original_title: string
  overview: string
  poster_path: string
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
  popularity: number
}

export default class MovieEntity {
  private _props: IMovieProps

  constructor(props: IMovieProps) {
    this._props = props
  }

  get props(): IMovieProps {
    return this._props
  }
}

export const MovieFactory = (): MovieEntity => {
  const dummyProps: IMovieProps = {
    adult: false,
    backdrop_path: '/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
    genre_ids: [28, 12, 35, 878, 10749, 10751],
    id: 363088,
    original_language: 'en',
    original_title: 'Ant-Man and the Wasp',
    overview:
      'Just when his time under house arrest is about to end, Scott Lang puts again his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.',
    poster_path: '/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
    release_date: '2018-07-04',
    title: 'Ant-Man and the Wasp',
    video: false,
    vote_average: 6.9,
    vote_count: 2811,
    popularity: 165.054
  }

  return new MovieEntity(dummyProps)
}
