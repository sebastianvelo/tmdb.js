import { WithId, PaginableResponse } from "../CommonModels";
import { Rating } from "../rating/Rating";

interface Film extends Rating, WithId {
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
export interface Movie extends Film {};
export interface TVShow extends Film {
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}
export interface Episode extends Rating, WithId {
  air_date?: string;
  episode_number?: number;
  name?: string;
  overview?: string;
  production_code?: string | null;
  season_number?: number;
  show_id?: number;
  still_path?: string | null;
}

export type Movies = PaginableResponse<Movie>;
export type TVShows = PaginableResponse<TVShow>;
export type Episodes = PaginableResponse<Episode>;

export type AlternativeTitle = {
  iso_3166_1?: string;
  title?: string;
  type?: string;
};

export interface ProductionCompany extends WithId {
  name?: string;
  logo_path?: string | null;
  origin_country: string;
};

export type ProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};

export type SpokenLanguage = {
  iso_639_1?: string;
  name?: string;
};

export type MovieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";
