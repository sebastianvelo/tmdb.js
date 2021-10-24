import { TMDBEntity } from "../CommonModels";

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
