import { TMDBEntityModel } from "../CommonModels";
import { Season } from "../season/Season";

export interface Person extends TMDBEntityModel {
  name?: string;
}
export interface Media extends TMDBEntityModel {
  name: string;
  original_name: string;
  character: string;
  episodes: any[];
  seasons: Season[];
}

export interface CreditPerson extends TMDBEntityModel {
  adult?: boolean;
  gender?: number | null;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}
export interface CrewPerson extends CreditPerson {
  department?: string;
  job?: string;
}
