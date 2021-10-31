import { TMDBEntityModel } from "../CommonModels";
import { PersonDetail } from "../person/Person";
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

export interface CreditPerson extends PersonDetail {
  original_name?: string;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}
export interface CrewPerson extends CreditPerson {
  department?: string;
  job?: string;
}
