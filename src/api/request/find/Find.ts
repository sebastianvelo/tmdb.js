import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { FindResult } from "./model/Models";
import { FindParams } from "./params/Params";

class Find extends TMDBRequest {
  protected resource: string = EndpointResource.FIND;

  protected endpoints = Endpoints;

  public find = (id: string, params?: FindParams) =>
    this.get<FindResult>(this.endpoints.FIND(id), params);
}

export default Find;
