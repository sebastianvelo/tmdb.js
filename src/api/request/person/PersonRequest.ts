import EndpointResource from "../../resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class PersonRequest extends TMDBRequest {
  protected resource: string = EndpointResource.PERSON;

  protected endpoints = Endpoints;

}
export default PersonRequest;