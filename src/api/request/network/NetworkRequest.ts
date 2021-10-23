import EndpointResource from "../../resource/EndpointResource";
import CompanyRequest from "../company/CompanyRequest";

class NetworkRequest extends CompanyRequest {
  protected resource = EndpointResource.NETWORK;

}

export default NetworkRequest;
