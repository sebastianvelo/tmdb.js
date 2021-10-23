import { TMDBEntity } from "../CommonModels";
import { Movie, TVShow } from "../film/Film";

export interface Person extends TMDBEntity {
  profile_path?: string | null;
  adult?: boolean;
  known_for?: (Movie | TVShow)[];
}
