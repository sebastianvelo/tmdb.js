import { WithId } from "../../common/model/CommonModels";

interface Person extends WithId {
  name?: string;
}
interface Season {
  air_date: string;
  poster_path: string;
  season_number: number;
}
interface Media extends WithId {
  name: string;
  original_name: string;
  character: string;
  episodes: [];
  seasons: Season[];
}
export interface CreditDetailsResponse extends WithId {
  credit_type: string;
  department?: string;
  job?: string;
  media: Media;
  media_type: string;
  person: Person;
}
