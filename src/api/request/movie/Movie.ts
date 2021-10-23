import EndpointResource from '../../common/resource/EndpointResource';
import TMDBRequest from '../TMDBRequest';
import Endpoints from './endpoints/Endpoints';
import { MovieDetail } from './model/Models';
import { MovieDetailsParams } from './params/Params';

class Movie extends TMDBRequest {
  protected resource: string = EndpointResource.MOVIE;

  protected endpoints = Endpoints;

  public getDetails = (id: string, params?: MovieDetailsParams) => this.get<MovieDetail>(this.endpoints.GET_DETAILS(id), params);
}

export default Movie;
