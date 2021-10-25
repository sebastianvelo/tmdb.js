import Resource from "../../resource/Resource";
import { CreditResponse } from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CreditRequest extends TMDBRequest {
  protected resource = Resource.CREDIT;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<CreditResponse>(this.endpoints.getDetails(id));
}

export default CreditRequest;
