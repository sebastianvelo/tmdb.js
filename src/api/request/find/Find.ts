import EndpointConfig from "../../../common/endpoint/EndpointConfig";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import FindEndpoints from "./endpoints/FindEndpoints";
import { FindResult } from "./model/FindModels.types";
import { FindParams } from "./params/FindParams.types";

class Find extends TMDBRequest {
    protected resource: string = EndpointResource.FIND;
    protected endpoints: EndpointConfig = FindEndpoints;

    public find = (id: string, params: FindParams) => this.get<FindResult>(this.endpoints.FIND(id), params);
}

export default Find;