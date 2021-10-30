import { Episode } from "../../../model/episode/Episode";
import { Season } from "../../../model/season/Season";
import { AccountStatesResponse, ListResponse, TranslationsResponse } from "../../../common/response/CommonResponse";

export interface SeasonResponse extends Season {
  name?: string;
  overview?: string;
  episode_count?: number;
}
export interface SeasonWithEpisodesResponse extends SeasonResponse {
  episodes?: Episode[];
}


interface SeasonAccountStates extends AccountStatesResponse {
  episode_number?: number;
}
export type SeasonAccountStatesResponse = ListResponse<SeasonAccountStates>;

export type SeasonTranslationsResponse = TranslationsResponse<{
  name?: string;
  overview?: string;
}>;
