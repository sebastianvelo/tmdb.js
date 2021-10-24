import { Character, GuestStar } from "../../model/episode/Episode";
import { Episode } from "../../model/film/Film";
import { AccountStatesResponse } from "../common/CommonResponse";

export interface EpisodeDetailsResponse extends Episode {
  crew?: Character[];
  guest_stars?: GuestStar[];
}

export interface EpisodeAccountStatesResponse extends AccountStatesResponse {
  
}