import Resource from "../../resource/Resource";
import CompanyRequest from "../company/CompanyRequest";

class NetworkRequest extends CompanyRequest {
  protected resource = Resource.NETWORK;

}

export default NetworkRequest;
