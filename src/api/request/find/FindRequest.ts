import EndpointResource from "../../resource/EndpointResource";
import { FindResponse } from "../../response/find/FindResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { FindParams } from "../../params/find/FindParams";

class FindRequest extends TMDBRequest {
  protected resource = EndpointResource.FIND;

  protected endpoints = Endpoints;

  public find = (id: string, query?: FindParams) =>
    this.get<FindResponse>(this.endpoints.FIND(id), query);
}

export default FindRequest;
