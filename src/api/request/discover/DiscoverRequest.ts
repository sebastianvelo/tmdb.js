import { DiscoverParams } from "../../params/discover/DiscoverParams";
import EndpointResource from "../../resource/EndpointResource";
import { MoviesResponse, TVShowsResponse } from "../../response/common/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class DiscoverRequest extends TMDBRequest {
  protected resource = EndpointResource.DISCOVER;

  protected endpoints = Endpoints;

  public movies = (query?: DiscoverParams) =>
    this.get<MoviesResponse>(this.endpoints.MOVIES(), query);

  public tvShows = (query?: DiscoverParams) =>
    this.get<TVShowsResponse>(this.endpoints.TV_SHOWS(), query);
}

export default DiscoverRequest;
