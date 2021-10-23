import EndpointResource from "../../../common/resource/EndpointResource";
import Film from "../Film";
import {
  DetailsParams
} from "../params/Params";
import Endpoints from "./endpoints/Endpoints";
import { TVShowDetail } from "./model/Models";

class TVShow extends Film {
  protected resource: string = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, params?: DetailsParams) =>
    this.get<TVShowDetail>(this.endpoints.GET_DETAILS(id), params);

}

export default TVShow;
