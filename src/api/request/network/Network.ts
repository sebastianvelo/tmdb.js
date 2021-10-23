import EndpointResource from "../../common/resource/EndpointResource";
import Company from "../company/Company";

class Network extends Company {
  protected resource: string = EndpointResource.NETWORK;

}

export default Network;
