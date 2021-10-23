import { Episodes, Movies, TVShows } from "../../common/model/CommonModels";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GuestSessionParams } from "./params/Params";

class GuestSession extends TMDBRequest {
  protected resource: string = EndpointResource.GUEST_SESSION;

  protected endpoints = Endpoints;

  public movies = (guest_session_id: string, params?: GuestSessionParams) =>
    this.get<Movies>(this.endpoints.MOVIES(guest_session_id), params);

  public tvShows = (guest_session_id: string, params?: GuestSessionParams) =>
    this.get<TVShows>(this.endpoints.TV_SHOWS(guest_session_id), params);

  public episodes = (guest_session_id: string, params?: GuestSessionParams) =>
    this.get<Episodes>(this.endpoints.EPISODES(guest_session_id), params);
}

export default GuestSession;
