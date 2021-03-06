import { DiscoverParams } from "./params/Params";
import Resource from "../../resource/Resource";
import { MoviesResponse, TVShowsResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class DiscoverRequest extends TMDBRequest {
  protected resource = Resource.DISCOVER;

  protected endpoints = Endpoints;

  public movies = (query?: DiscoverParams) =>
    this.get<MoviesResponse>(this.endpoints.movies(), query);

  public tvShows = (query?: DiscoverParams) =>
    this.get<TVShowsResponse>(this.endpoints.tvShows(), query);
}

export default DiscoverRequest;
