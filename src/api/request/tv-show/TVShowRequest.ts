import EndpointResource from "../../resource/EndpointResource";
import { TVShowDetailResponse } from "../../response/tv-show/TVShowResponse";
import FilmRequest from "../film/FilmRequest";
import { DetailsParams } from "../../params/film/FilmParams";
import Endpoints from "./endpoints/Endpoints";

class TVShowRequest extends FilmRequest {
  protected resource = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, query?: DetailsParams) =>
    this.get<TVShowDetailResponse>(this.endpoints.GET_DETAILS(id), query);
}

export default TVShowRequest;
