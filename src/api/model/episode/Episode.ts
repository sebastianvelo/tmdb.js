import { TMDBEntity } from "../CommonModels";
import { Rating } from "../rating/Rating";

export interface Person extends TMDBEntity {
  credit_id?: string;
  name?: string;
  profile_path?: string | null;
}

export interface Character extends Person {
  department?: string;
  job?: string;
}

export interface GuestStar extends Character {
  order?: number;
  character?: string;
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
