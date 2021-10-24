import { TimeWindow } from "../../model/trending/Trending";
import EndpointResource from "../../resource/EndpointResource";
import { AllMediaTypesResponse, MoviesResponse, PeopleResponse, TVShowsResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class SearchRequest extends TMDBRequest {
  protected resource = EndpointResource.SEARCH;

  protected endpoints = Endpoints;

  public getAll = (timeWindow: TimeWindow) =>
    this.get<AllMediaTypesResponse>(this.endpoints.getAll(timeWindow));

  public getMovies = (timeWindow: TimeWindow) =>
    this.get<MoviesResponse>(this.endpoints.getMovies(timeWindow));

  public getTVShows = (timeWindow: TimeWindow) =>
    this.get<TVShowsResponse>(this.endpoints.getTVShows(timeWindow));

  public getPeople = (timeWindow: TimeWindow) =>
    this.get<PeopleResponse>(this.endpoints.getPeople(timeWindow));
}

export default SearchRequest;
