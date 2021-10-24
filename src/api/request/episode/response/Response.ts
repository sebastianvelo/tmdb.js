import { TranslationsResponse } from "../../../model/CommonModels";
import { Character, Episode, GuestStar } from "../../../model/episode/Episode";
import { AccountStatesResponse } from "../../../common/response/CommonResponse";

export interface EpisodeDetailsResponse extends Episode {
  crew?: Character[];
  guest_stars?: GuestStar[];
}

export interface EpisodeAccountStatesResponse extends AccountStatesResponse {}

export type EpisodeTranslationsResponse = TranslationsResponse<{
  biography?: string;
}>;
