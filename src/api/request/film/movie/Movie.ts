import EndpointResource from "../../../common/resource/EndpointResource";
import Film from "../Film";
import {
  DetailsParams,
  NowPlayingParams,
  UpcomingParams
} from "../params/Params";
import Endpoints from "./endpoints/Endpoints";
import { MovieDetail } from "./model/Models";

class Movie extends Film {
  protected resource: string = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, params?: DetailsParams) =>
    this.get<MovieDetail>(this.endpoints.GET_DETAILS(id), params);

  public getNowPlaying = (params?: NowPlayingParams) =>
    this.get(this.endpoints.GET_NOW_PLAYING(), params);

  public getUpcoming = (params?: UpcomingParams) =>
    this.get(this.endpoints.GET_UPCOMING(), params);
}

export default Movie;
