import EndpointConfig from "../../../../common/endpoint/EndpointConfig";

const FindEndpoints: EndpointConfig = {
    FIND: (id: string) => `/${id}`,
};

export default FindEndpoints;