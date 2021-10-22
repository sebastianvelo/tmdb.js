import EndpointConfig from "../../common/endpoint/EndpointConfig";
import EndpointResource from "../common/resource/EndpointResource";
import TMDB from "../TMDB";
import CreditEndpoints from "./endpoints/CompanyEndpoints";
import { CreditDetails } from "./model/Credit.types";

class Company extends TMDB {
    protected resource: string = EndpointResource.CREDIT;
    protected endpoints: EndpointConfig = CreditEndpoints;

    public getDetails = (id: string) => this.get<CreditDetails>(this.endpoints.GET_DETAILS(id));
}

export default Company;