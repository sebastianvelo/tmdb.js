import EndpointResource from "../../resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { WatchProviderParams } from "./params/Params";
import {
  FilmWatchProvidersResponse,
  RegionsWatchProvidersResponse
} from "./response/Response";

class WatchProviderRequest extends TMDBRequest {
  protected resource = EndpointResource.WATCH_PROVIDER;

  protected endpoints = Endpoints;

  public getAvailableRegions = (params?: WatchProviderParams) =>
    this.get<RegionsWatchProvidersResponse>(
      this.endpoints.GET_AVAILABLE_REGIONS(),
      params
    );

  public getMovieProviders = (params?: WatchProviderParams) =>
    this.get<FilmWatchProvidersResponse>(
      this.endpoints.GET_MOVIE_PROVIDERS(),
      params
    );

  public getTVProviders = (params?: WatchProviderParams) =>
    this.get<FilmWatchProvidersResponse>(
      this.endpoints.GET_TV_PROVIDERS(),
      params
    );
}

export default WatchProviderRequest;
