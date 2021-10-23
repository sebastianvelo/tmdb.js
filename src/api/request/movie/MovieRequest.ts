import EndpointResource from "../../common/resource/EndpointResource";
import { MovieDetailResponse } from "../../response/movie/MovieResponse";
import FilmRequest from "../film/FilmRequest";
import { DetailsParams, NowPlayingParams, UpcomingParams } from "../film/params/Params";
import Endpoints from "./endpoints/Endpoints";

class MovieRequest extends FilmRequest {
  protected resource: string = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, query?: DetailsParams) =>
    this.get<MovieDetailResponse>(this.endpoints.GET_DETAILS(id), query);

  public getNowPlaying = (query?: NowPlayingParams) =>
    this.get(this.endpoints.GET_NOW_PLAYING(), query);

  public getUpcoming = (query?: UpcomingParams) =>
    this.get(this.endpoints.GET_UPCOMING(), query);
}

export default MovieRequest;
