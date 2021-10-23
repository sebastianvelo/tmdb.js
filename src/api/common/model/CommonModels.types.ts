export type PaginableResponse<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};
interface Rating {
  vote_average?: number;
  vote_count?: number;
  rating?: number;
}

export type Genre = {
  id?: number;
  name?: string;
};
interface Film extends Rating {
  id?: number;
  adult?: boolean;
  backdrop_path?: string | null;
  original_title?: string;
  original_language?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string | null;
  release_date?: string;
  genre_ids: number[];
  title?: string;
  video?: boolean;
}
export interface TVShow extends Film {
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}
export interface Episode extends Rating {
  id?: number;
  air_date?: string;
  episode_number?: number;
  name?: string;
  overview?: string;
  production_code?: string | null;
  season_number?: number;
  show_id?: number;
  still_path?: string | null;
}

export type Movie = Film;

export type Person = {
  id?: number;
  profile_path?: string | null;
  adult?: boolean;
  known_for: (Movie | TVShow)[];
};

export type Movies = PaginableResponse<Movie>;
export type TVShows = PaginableResponse<TVShow>;
export type Episodes = PaginableResponse<Episode>;
