import { ListResponse, TranslationsResponse } from "../../model/CommonModels";
import { Episode } from "../../model/episode/Episode";
import { Season } from "../../model/season/Season";
import { AccountStatesResponse } from "../common/CommonResponse";

export interface SeasonDetailsResponse extends Season {
  episodes?: Episode[];
  name?: string;
  overview?: string;
}

interface SeasonAccountStates extends AccountStatesResponse {
  episode_number?: number;
}
export type SeasonAccountStatesResponse = ListResponse<SeasonAccountStates>;

export type SeasonTranslationsResponse = TranslationsResponse<{
  name?: string;
  overview?: string;
}>;
