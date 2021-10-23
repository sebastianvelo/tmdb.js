import EndpointResource from "../../common/resource/EndpointResource";
import { CompanyAlternativeNames, CompanyDetailsResponse, CompanyImages } from "../../response/company/CompanyResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CompanyRequest extends TMDBRequest {
  protected resource: string = EndpointResource.COMPANY;

  protected endpoints = Endpoints;

  public getDetails = (id: string) =>
    this.get<CompanyDetailsResponse>(this.endpoints.GET_DETAILS(id));

  public getAlternativeNames = (id: string) =>
    this.get<CompanyAlternativeNames>(this.endpoints.GET_ALTERNATIVE_NAMES(id));

  public getImages = (id: string) =>
    this.get<CompanyImages>(this.endpoints.GET_IMAGES(id));
}

export default CompanyRequest;
