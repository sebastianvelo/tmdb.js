import { TMDBEntityModel } from "../../../model/CommonModels";
import { Media, Person } from "../../../model/credit/Credit";

export interface CreditResponse extends TMDBEntityModel {
  credit_type: string;
  department?: string;
  job?: string;
  media: Media;
  media_type: string;
  person: Person;
}
