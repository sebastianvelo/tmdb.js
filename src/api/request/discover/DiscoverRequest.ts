import EndpointResource from "../../resource/EndpointResource";
import { DiscoverMoviesResponse, DiscoverTVShowsResponse } from "../../response/discover/DiscoverResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { DiscoverParams } from "../../params/discover/DiscoverParams";

class DiscoverRequest extends TMDBRequest {
  protected resource: string = EndpointResource.DISCOVER;

  protected endpoints = Endpoints;

  public movies = (query?: DiscoverParams) =>
    this.get<DiscoverMoviesResponse>(this.endpoints.MOVIES(), query);

  public tvShows = (query?: DiscoverParams) =>
    this.get<DiscoverTVShowsResponse>(this.endpoints.TV_SHOWS(), query);
}

export default DiscoverRequest;
