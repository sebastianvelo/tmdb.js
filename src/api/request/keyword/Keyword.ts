import { Movies } from '../../common/model/CommonModels.types';
import EndpointResource from '../../common/resource/EndpointResource';
import TMDBRequest from '../TMDBRequest';
import Endpoints from './endpoints/Endpoints';
import { KeywordDetails } from './model/Models';

class Keyword extends TMDBRequest {
  protected resource: string = EndpointResource.KEYWORD;

  protected endpoints = Endpoints;

  public getDetails = (id: string) => this.get<KeywordDetails>(this.endpoints.GET_DETAILS(id));
  public getMovies = (id: string) => this.get<Movies>(this.endpoints.GET_MOVIES(id));
}

export default Keyword;
