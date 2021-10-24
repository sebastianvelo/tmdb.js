import EndpointResource from "../../resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class WatchProviderRequest extends TMDBRequest {
  protected resource = EndpointResource.WATCH_PROVIDER;

  protected endpoints = Endpoints;

  public getAvailableRegions = (params?: any) =>
    this.get(this.endpoints.GET_AVAILABLE_REGIONS(), params);

  public getMovieProviders = (params?: any) =>
    this.get(this.endpoints.GET_MOVIE_PROVIDERS(), params);

  public getTVProviders = (params?: any) =>
    this.get(this.endpoints.GET_TV_PROVIDERS(), params);
}

export default WatchProviderRequest;
