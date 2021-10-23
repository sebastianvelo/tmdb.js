import EndpointResource from "../../common/resource/EndpointResource";
import { CreditDetailsResponse } from "../../response/credit/CreditResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CreditRequest extends TMDBRequest {
  protected resource: string = EndpointResource.CREDIT;

  protected endpoints = Endpoints;

  public getDetails = (id: string) =>
    this.get<CreditDetailsResponse>(this.endpoints.GET_DETAILS(id));
}

export default CreditRequest;
