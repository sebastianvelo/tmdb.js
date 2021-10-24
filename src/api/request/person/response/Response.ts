import { TranslationsResponse } from "../../../common/response/CommonResponse";
import { TMDBEntity } from "../../../model/CommonModels";
import { PersonDetail } from "../../../model/person/Person";

export interface PersonResponse extends TMDBEntity {
  birthday?: string | null;
  known_for_department?: string;
}

export interface PersonDetailsResponse extends PersonDetail {}


export type PersonTranslationsResponse = TranslationsResponse<{
  biography?: string;
}>;