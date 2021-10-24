import EndpointResource from "../../resource/EndpointResource";
import { ReviewDetailsResponse } from "../../response/review/ReviewResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class ReviewRequest extends TMDBRequest {
  protected resource = EndpointResource.REVIEW;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<ReviewDetailsResponse>(this.endpoints.GET_DETAILS(id));

}

export default ReviewRequest;