export type GenreId = number

export interface Genre {
  id: GenreId
  name: string
}

export interface IMovieProps {
  adult: boolean
  backdrop_path: string
  belongs_to_collection?: {
    id: number
    name: string
    poster_path: string
    backdrop_path: string
  }
  budget?: number
  genre_ids: GenreId[]
  genres?: Genre[]
  homepage?: string
  id: number
  imdb_id?: string
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string
  production_companies?: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[]
  production_countries?: {
    iso_3166_1: string
    name: string
  }[]
  release_date: string
  revenue?: number
  runtime?: number
  spoken_languages?: {
    iso_639_1: string
    name: string
  }[]
  status?: string
  tagline?: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
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

export const MoviePropsFactory = (): IMovieProps => {
  return {
    adult: false,
    backdrop_path: '/6P3c80EOm7BodndGBUAJHHsHKrp.jpg',
    belongs_to_collection: {
      id: 422834,
      name: 'Ant-Man Collection',
      poster_path: '/fixDhEstFF5FfB4IPUCuGlgAp5J.jpg',
      backdrop_path: '/fBCmtUJzQUKlSuQH4huvkYdkifq.jpg'
    },
    budget: 140000000,
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
    homepage: 'https://www.marvel.com/movies/ant-man-and-the-wasp',
    id: 363088,
    imdb_id: 'tt5095030',
    original_language: 'en',
    original_title: 'Ant-Man and the Wasp',
    overview: 'Just when his time under house arrest is about to end, Scott Lang puts again his freedom at risk to help Hope van Dyne and Dr. Hank Pym dive into the quantum realm and try to accomplish, against time and any chance of success, a very dangerous rescue mission.',
    popularity: 165.054,
    poster_path: '/rv1AWImgx386ULjcf62VYaW8zSt.jpg',
    production_companies: [
      {
        id: 420,
        logo_path: '/hUzeosd33nzE5MCNsZxCGEKTXaQ.png',
        name: 'Marvel Studios',
        origin_country: 'US'
      }
    ],
    production_countries: [
      {
        iso_3166_1: 'US',
        name: 'United States of America'
      }
    ],
    release_date: '2018-07-04',
    revenue: 622379576,
    runtime: 119,
    spoken_languages: [
      {
        iso_639_1: 'en',
        name: 'English'
      }
    ],
    status: 'Released',
    title: 'Ant-Man and the Wasp',
    video: false,
    vote_average: 6.9,
    vote_count: 2811
  }
}

export const MovieFactory = (): MovieEntity => {
  return new MovieEntity(this.MoviePropsFactory())
}
