import { Language, TMDBEntityModel } from "../CommonModels";
import { Rating } from "../rating/Rating";

interface Film extends Rating, TMDBEntityModel {
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
export interface Movie extends Film {}
export interface TVShow extends Film {
  first_air_date: string;
  origin_country: string[];
  name: string;
  original_name: string;
}

export type AlternativeTitle = {
  iso_3166_1?: string;
  title?: string;
  type?: string;
};

export interface SpokenLanguage extends Language {
  name?: string;
}

export type MovieStatus =
  | "Rumored"
  | "Planned"
  | "In Production"
  | "Post Production"
  | "Released"
  | "Canceled";