import EndpointResource from "../../resource/EndpointResource";
import { CreditDetailsResponse } from "../../response/credit/CreditResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CreditRequest extends TMDBRequest {
  protected resource = EndpointResource.CREDIT;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<CreditDetailsResponse>(this.endpoints.GET_DETAILS(id));
}

export default CreditRequest;
