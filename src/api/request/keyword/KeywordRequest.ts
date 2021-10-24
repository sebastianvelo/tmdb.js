import { KeywordDetailResponse } from "./response/Response";
import EndpointResource from "../../resource/EndpointResource";
import { MoviesResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class KeywordRequest extends TMDBRequest {
  protected resource = EndpointResource.KEYWORD;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<KeywordDetailResponse>(this.endpoints.getDetails(id));

  public getMovies = (id: number) =>
    this.get<MoviesResponse>(this.endpoints.getMovies(id));
}

export default KeywordRequest;
