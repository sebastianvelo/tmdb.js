import {
  AllMediaTypesResponse,
  CompaniesResponse,
  KeywordsResponse,
  MoviesResponse,
  PeopleResponse,
  TVShowsResponse
} from "../../common/response/CommonResponse";
import Resource from "../../resource/Resource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { SearchMediaParams, SearchParams } from "./params/Params";

class SearchRequest extends TMDBRequest {
  protected resource = Resource.SEARCH;

  protected endpoints = Endpoints;

  public getAll = (params: SearchMediaParams) =>
    this.get<AllMediaTypesResponse>(this.endpoints.getAll(), params);

  public getMovies = (params: SearchMediaParams) =>
    this.get<MoviesResponse>(this.endpoints.getMovies(), params);

  public getTVShows = (params: SearchMediaParams) =>
    this.get<TVShowsResponse>(this.endpoints.getTVShows(), params);

  public getPeople = (params: SearchMediaParams) =>
    this.get<PeopleResponse>(this.endpoints.getPeople(), params);

  public getKeywords = (params: SearchParams) =>
    this.get<KeywordsResponse>(this.endpoints.getKeywords(), params);

  public getCompany = (params: SearchParams) =>
    this.get<CompaniesResponse>(this.endpoints.getCompanies(), params);
}

export default SearchRequest;
