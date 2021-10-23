import EndpointResource from "../../common/resource/EndpointResource";
import CompanyRequest from "../company/CompanyRequest";

class NetworkRequest extends CompanyRequest {
  protected resource: string = EndpointResource.NETWORK;

}

export default NetworkRequest;
