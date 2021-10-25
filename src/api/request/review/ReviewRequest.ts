import Resource from "../../resource/Resource";
import { ReviewResponse } from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class ReviewRequest extends TMDBRequest {
  protected resource = Resource.REVIEW;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<ReviewResponse>(this.endpoints.getDetails(id));

}

export default ReviewRequest;
