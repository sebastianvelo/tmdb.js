import EndpointConfig from "../../../common/endpoint/EndpointConfig";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import CompanyEndpoints from "./endpoints/CompanyEndpoints";
import { CompanyAlternativeNames, CompanyDetails, CompanyImages } from "./model/Company.types";

class Company extends TMDBRequest {
    protected resource: string = EndpointResource.COMPANY;
    protected endpoints: EndpointConfig = CompanyEndpoints;

    public getDetails = (id: string) => this.get<CompanyDetails>(this.endpoints.GET_DETAILS(id));
    public getAlternativeNames = (id: string) => this.get<CompanyAlternativeNames>(this.endpoints.GET_ALTERNATIVE_NAMES(id));
    public getImages = (id: string) => this.get<CompanyImages>(this.endpoints.GET_IMAGES(id));
}

export default Company;