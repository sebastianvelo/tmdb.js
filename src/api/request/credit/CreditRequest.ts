import Resource from "../../resource/Resource";
import { CreditDetailsResponse } from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CreditRequest extends TMDBRequest {
  protected resource = Resource.CREDIT;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<CreditDetailsResponse>(this.endpoints.getDetails(id));
}

export default CreditRequest;
