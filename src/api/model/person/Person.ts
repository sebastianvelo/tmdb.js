import { TMDBEntity } from "../CommonModels";
import { Movie, TVShow } from "../film/Film";

export interface Person extends TMDBEntity {
  profile_path?: string | null;
  adult?: boolean;
  known_for?: (Movie | TVShow)[];
}

export interface PersonDetail extends TMDBEntity {
  birthday?: string;
  known_for_department?: string;
  deathday?: null | string;
  name?: string;
  also_known_as?: string[];
  gender?: number;
  biography?: string;
  popularity?: number;
  place_of_birth?: string;
  profile_path?: string | null;
  adult?: boolean;
  imdb_id?: string;
  homepage?: string | null;
}
