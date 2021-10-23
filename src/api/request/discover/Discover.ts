import EndpointConfig from "../../../common/endpoint/EndpointConfig";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import DiscoveryEndpoints from "./endpoints/DiscoveryEndpoints";
import { Movies, TVShows } from "./model/DiscoverModels.types";
import { DiscoverParams } from "./params/DiscoverParams.types";

class Discover extends TMDBRequest {
    protected resource: string = EndpointResource.DISCOVER;
    protected endpoints: EndpointConfig = DiscoveryEndpoints;

    public movies = (params: DiscoverParams) => this.get<Movies>(this.endpoints.MOVIES(), params);
    public tvShows = (params: DiscoverParams) => this.get<TVShows>(this.endpoints.TV_SHOWS(), params);
}

export default Discover;