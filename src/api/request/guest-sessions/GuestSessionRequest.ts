import Resource from "../../resource/Resource";
import { MoviesResponse, TVShowsResponse, EpisodesResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GuestSessionParams } from "./params/Params";

class GuestSessionRequest extends TMDBRequest {
  protected resource = Resource.GUEST_SESSION;

  protected endpoints = Endpoints;

  public movies = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<MoviesResponse>(this.endpoints.movies(guest_session_id), query);

  public tvShows = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<TVShowsResponse>(this.endpoints.tvShows(guest_session_id), query);

  public episodes = (guest_session_id: string, query?: GuestSessionParams) =>
    this.get<EpisodesResponse>(this.endpoints.episodes(guest_session_id), query);
}

export default GuestSessionRequest;
