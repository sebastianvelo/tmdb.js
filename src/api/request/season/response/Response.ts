import { Episode } from "../../../model/episode/Episode";
import { Season } from "../../../model/season/Season";
import { AccountStatesResponse, ListResponse, TranslationsResponse } from "../../../common/response/CommonResponse";

export interface SeasonResponse extends Season {
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
