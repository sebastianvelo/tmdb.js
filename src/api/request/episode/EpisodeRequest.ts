import { DetailParams } from "../../params/common/CommonParams";
import EndpointResource from "../../resource/EndpointResource";
import { TVShowDetailResponse } from "../../response/tv-show/TVShowResponse";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class EpisodeRequest extends FilmRequest {
  protected resource = EndpointResource.TV;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<TVShowDetailResponse>(this.endpoints.GET_DETAILS(id), query);

}

export default EpisodeRequest;
