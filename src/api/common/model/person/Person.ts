import { WithId } from "../CommonModels";
import { Movie, TVShow } from "../film/Film";

export interface Person extends WithId {
    profile_path?: string | null;
    adult?: boolean;
    known_for?: (Movie | TVShow)[];
  }