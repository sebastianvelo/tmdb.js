import EndpointResource from '../../common/resource/EndpointResource';
import TMDBRequest from '../TMDBRequest';
import Endpoints from './endpoints/Endpoints';
import { CreditDetails } from './model/Models';

class Credit extends TMDBRequest {
  protected resource: string = EndpointResource.CREDIT;

  protected endpoints = Endpoints;

  public getDetails = (id: string) => this.get<CreditDetails>(this.endpoints.GET_DETAILS(id));
}

export default Credit;
