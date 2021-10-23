import { KeywordDetailResponse } from "../../response/keyword/Keyword";
import EndpointResource from "../../common/resource/EndpointResource";
import { MoviesResponse } from "../../response/common/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class Keyword extends TMDBRequest {
  protected resource: string = EndpointResource.KEYWORD;

  protected endpoints = Endpoints;

  public getDetails = (id: string) =>
    this.get<KeywordDetailResponse>(this.endpoints.GET_DETAILS(id));

  public getMovies = (id: string) =>
    this.get<MoviesResponse>(this.endpoints.GET_MOVIES(id));
}

export default Keyword;
