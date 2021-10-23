import EndpointConfig from "../../../../common/endpoint/EndpointConfig";

const CreditEndpoints: EndpointConfig = {
    GET_DETAILS: (id: string) => `/${id}`,
};

export default CreditEndpoints;