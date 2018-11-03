export type GenreId = number

export interface Genre {
  id: GenreId
  name: string
}

export interface IMovieProps {
  adult: boolean
  backdrop_path: string
  genre_ids: GenreId[]
  genres?: Genre[]
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

export const GenresFactory = (): Genre[] => {
  return [
    {
      id: 28,
      name: 'Action'
    },
    {
      id: 12,
      name: 'Adventure'
    },
    {
      id: 16,
      name: 'Animation'
    },
    {
      id: 35,
      name: 'Comedy'
    },
    {
      id: 80,
      name: 'Crime'
    },
    {
      id: 99,
      name: 'Documentary'
    },
    {
      id: 18,
      name: 'Drama'
    },
    {
      id: 10751,
      name: 'Family'
    },
    {
      id: 14,
      name: 'Fantasy'
    },
    {
      id: 36,
      name: 'History'
    },
    {
      id: 27,
      name: 'Horror'
    },
    {
      id: 10402,
      name: 'Music'
    },
    {
      id: 9648,
      name: 'Mystery'
    },
    {
      id: 10749,
      name: 'Romance'
    },
    {
      id: 878,
      name: 'Science Fiction'
    },
    {
      id: 10770,
      name: 'TV Movie'
    },
    {
      id: 53,
      name: 'Thriller'
    },
    {
      id: 10752,
      name: 'War'
    },
    {
      id: 37,
      name: 'Western'
    }
  ]
}

export const MovieFactory = (): MovieEntity => {
  const dummyProps: IMovieProps = {
    adult: false,
    backdrop_path: '/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
    genre_ids: [28, 12, 35, 878, 10749, 10751],
    genres: [
      {
        id: 28,
        name: 'Action'
      },
      {
        id: 12,
        name: 'Science Fiction'
      },
      {
        id: 35,
        name: 'Comedy'
      },
      {
        id: 878,
        name: 'Adventure'
      }
    ],
    id: 363088,
    original_language: 'en',
    original_title: 'Ant-Man and the Wasp',
    overview: 'Just when his time under house arrest is about to end, Scott Lang puts again his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.',
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
