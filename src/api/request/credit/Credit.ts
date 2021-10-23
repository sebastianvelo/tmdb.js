import EndpointConfig from "../../../common/endpoint/EndpointConfig";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import CreditEndpoints from "./endpoints/CreditEndpoints";
import { CreditDetails } from "./model/Credit.types";

class Company extends TMDBRequest {
    protected resource: string = EndpointResource.CREDIT;
    protected endpoints: EndpointConfig = CreditEndpoints;

    public getDetails = (id: string) => this.get<CreditDetails>(this.endpoints.GET_DETAILS(id));
}

export default Company;