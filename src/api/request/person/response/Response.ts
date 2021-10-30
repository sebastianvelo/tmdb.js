import { TranslationsResponse } from "../../../common/response/CommonResponse";
import { TMDBEntityModel } from "../../../model/CommonModels";
import { PersonDetail } from "../../../model/person/Person";

export interface PersonResponse extends TMDBEntityModel {
  birthday?: string | null;
  known_for_department?: string;
}

export interface PersonDetailsResponse extends PersonDetail {}


export type PersonTranslationsResponse = TranslationsResponse<{
  biography?: string;
}>;