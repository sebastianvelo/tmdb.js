import EndpointResource from "../../resource/EndpointResource";
import { MoviesResponse, TVShowsResponse, EpisodesResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GuestSessionParams } from "./params/Params";

class GuestSessionRequest extends TMDBRequest {
  protected resource = EndpointResource.GUEST_SESSION;

  protected endpoints = Endpoints;

  public movies = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<MoviesResponse>(this.endpoints.MOVIES(guest_session_id), query);

  public tvShows = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<TVShowsResponse>(this.endpoints.TV_SHOWS(guest_session_id), query);

  public episodes = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<EpisodesResponse>(this.endpoints.EPISODES(guest_session_id), query);
}

export default GuestSessionRequest;
