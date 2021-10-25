import { TMDBEntity } from "../../../model/CommonModels";
import { Media, Person } from "../../../model/credit/Credit";

export interface CreditResponse extends TMDBEntity {
  credit_type: string;
  department?: string;
  job?: string;
  media: Media;
  media_type: string;
  person: Person;
}
