import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import {
  CompanyAlternativeNames,
  CompanyDetails,
  CompanyImages
} from "./model/Models";

class Company extends TMDBRequest {
  protected resource: string = EndpointResource.COMPANY;

  protected endpoints = Endpoints;

  public getDetails = (id: string) =>
    this.get<CompanyDetails>(this.endpoints.GET_DETAILS(id));

  public getAlternativeNames = (id: string) =>
    this.get<CompanyAlternativeNames>(this.endpoints.GET_ALTERNATIVE_NAMES(id));

  public getImages = (id: string) =>
    this.get<CompanyImages>(this.endpoints.GET_IMAGES(id));
}

export default Company;
