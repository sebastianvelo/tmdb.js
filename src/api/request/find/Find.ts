import EndpointResource from "../../common/resource/EndpointResource";
import { FindResponse } from "../../response/find/FindResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { FindParams } from "./params/Params";

class Find extends TMDBRequest {
  protected resource: string = EndpointResource.FIND;

  protected endpoints = Endpoints;

  public find = (id: string, query?: FindParams) =>
    this.get<FindResponse>(this.endpoints.FIND(id), query);
}

export default Find;
