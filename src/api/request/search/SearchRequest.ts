import { TimeWindow } from "../../model/trending/Trending";
import EndpointResource from "../../common/resource/EndpointResource";
import { AllMediaTypesResponse, MoviesResponse, PeopleResponse, TVShowsResponse } from "../../response/common/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class SearchRequest extends TMDBRequest {
  protected resource: string = EndpointResource.SEARCH;

  protected endpoints = Endpoints;

  public getAll = (timeWindow: TimeWindow) =>
    this.get<AllMediaTypesResponse>(this.endpoints.GET_ALL(timeWindow));

  public getMovies = (timeWindow: TimeWindow) =>
    this.get<MoviesResponse>(this.endpoints.GET_MOVIES(timeWindow));

  public getTVShows = (timeWindow: TimeWindow) =>
    this.get<TVShowsResponse>(this.endpoints.GET_TVSHOWS(timeWindow));

  public getPeople = (timeWindow: TimeWindow) =>
    this.get<PeopleResponse>(this.endpoints.GET_PEOPLE(timeWindow));
}

export default SearchRequest;
