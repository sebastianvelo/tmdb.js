import Resource from "../../resource/Resource";
import {
  CompanyAlternativeNamesResponse,
  CompanyResponse,
  CompanyImagesResponse
} from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class CompanyRequest extends TMDBRequest {
  protected resource = Resource.COMPANY;

  protected endpoints = Endpoints;

  public getDetails = (id: number) =>
    this.get<CompanyResponse>(this.endpoints.getDetails(id));

  public getAlternativeNames = (id: number) =>
    this.get<CompanyAlternativeNamesResponse>(this.endpoints.getAlternativeNames(id));

  public getImages = (id: number) =>
    this.get<CompanyImagesResponse>(this.endpoints.getImages(id));
}

export default CompanyRequest;
