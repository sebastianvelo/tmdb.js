import EndpointResource from "../../resource/EndpointResource";
import { FindResponse } from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { FindParams } from "./params/Params";

class FindRequest extends TMDBRequest {
  protected resource = EndpointResource.FIND;

  protected endpoints = Endpoints;

  public find = (id: number, query?: FindParams) =>
    this.get<FindResponse>(this.endpoints.find(id), query);
}

export default FindRequest;
