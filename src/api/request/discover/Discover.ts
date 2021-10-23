import { Movies, TVShows } from "../../common/model/film/Film";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { DiscoverParams } from "./params/Params";

class Discover extends TMDBRequest {
  protected resource: string = EndpointResource.DISCOVER;

  protected endpoints = Endpoints;

  public movies = (params?: DiscoverParams) =>
    this.get<Movies>(this.endpoints.MOVIES(), params);

  public tvShows = (params?: DiscoverParams) =>
    this.get<TVShows>(this.endpoints.TV_SHOWS(), params);
}

export default Discover;
