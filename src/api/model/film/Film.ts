import { TMDBEntity } from "../CommonModels";
import { Rating } from "../rating/Rating";

interface Film extends Rating, TMDBEntity {
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
export interface Episode extends Rating, TMDBEntity {
  air_date?: string;
  episode_number?: number;
  name?: string;
  overview?: string;
  production_code?: string | null;
  season_number?: number;
  show_id?: number;
  still_path?: string | null;
}

export type AlternativeTitle = {
  iso_3166_1?: string;
  title?: string;
  type?: string;
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
