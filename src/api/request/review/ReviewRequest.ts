import EndpointResource from "../../resource/EndpointResource";
import { ReviewDetailsResponse } from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class ReviewRequest extends TMDBRequest {
  protected resource = EndpointResource.REVIEW;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<ReviewDetailsResponse>(this.endpoints.getDetails(id));

}

export default ReviewRequest;
