import { Movies } from "../../common/model/film/Film";
import { KeywordDetail } from "../../common/model/keyword/Keyword";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class Keyword extends TMDBRequest {
  protected resource: string = EndpointResource.KEYWORD;

  protected endpoints = Endpoints;

  public getDetails = (id: string) =>
    this.get<KeywordDetail>(this.endpoints.GET_DETAILS(id));

  public getMovies = (id: string) =>
    this.get<Movies>(this.endpoints.GET_MOVIES(id));
}

export default Keyword;
