import EndpointConfig from "../../../../common/endpoint/EndpointConfig";

const DiscoveryEndpoints: EndpointConfig = {
    MOVIES: () => `/movie`,
    TV_SHOWS: () => `/tv`,
};

export default DiscoveryEndpoints;