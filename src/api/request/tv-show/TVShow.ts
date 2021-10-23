import EndpointResource from "../../common/resource/EndpointResource";
import { TVShowDetailResponse } from "../../response/tv-show/TVShowResponse";
import Film from "../film/Film";
import { DetailsParams } from "../film/params/Params";
import Endpoints from "./endpoints/Endpoints";

class TVShow extends Film {
  protected resource: string = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, query?: DetailsParams) =>
    this.get<TVShowDetailResponse>(this.endpoints.GET_DETAILS(id), query);
}

export default TVShow;
