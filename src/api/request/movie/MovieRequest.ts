import EndpointResource from "../../resource/EndpointResource";
import { MovieDetailResponse } from "../../response/movie/MovieResponse";
import FilmRequest from "../film/FilmRequest";
import { FilmDetailsParams, NowPlayingParams, UpcomingParams } from "../../params/film/FilmParams";
import Endpoints from "./endpoints/Endpoints";

class MovieRequest extends FilmRequest {
  protected resource = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: string, query?: FilmDetailsParams) =>
    this.get<MovieDetailResponse>(this.endpoints.GET_DETAILS(id), query);

  public getNowPlaying = (query?: NowPlayingParams) =>
    this.get(this.endpoints.GET_NOW_PLAYING(), query);

  public getUpcoming = (query?: UpcomingParams) =>
    this.get(this.endpoints.GET_UPCOMING(), query);
}

export default MovieRequest;
