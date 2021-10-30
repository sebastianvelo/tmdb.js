import { DetailParams } from "../../common/params/CommonParams";
import { MoviesResponse } from "../../common/response/CommonResponse";
import Resource from "../../resource/Resource";
import FilmRequest from "../film/FilmRequest";
import {
  LatestParams,
  ListsParams,
  NowPlayingParams,
  PopularParams,
  RecommendationsParams,
  SimilarParams,
  TopRatedParams,
  UpcomingParams
} from "../film/params/Params";
import Endpoints from "./endpoints/Endpoints";
import {
  MovieReleaseDatesResponse,
  MovieResponse,
  MovieTranslationsResponse
} from "./response/Response";

class MovieRequest extends FilmRequest {
  protected resource = Resource.MOVIE;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<MovieResponse>(this.endpoints.getDetails(id), query);

  public getLatestMovie = (query?: LatestParams) =>
    this.getLatest<MoviesResponse>(query);

  public getRelaseDates = (id: number) =>
    this.get<MovieReleaseDatesResponse>(this.endpoints.getReleaseDates(id));

  public getMovieTranslations = (id: number) =>
    this.getTranslations<MovieTranslationsResponse>(id);

  public getMovieRecommendations = (
    id: number,
    query?: RecommendationsParams
  ) => this.getRecommendations<MoviesResponse>(id, query);

  public getSimilarMovies = (id: number, query?: SimilarParams) =>
    this.getSimilars<MoviesResponse>(id, query);

  public getNowPlaying = (query?: NowPlayingParams) =>
    this.get<MoviesResponse>(this.endpoints.getNowPlaying(), query);

  public getUpcoming = (query?: UpcomingParams) =>
    this.get<MoviesResponse>(this.endpoints.getUpcoming(), query);

  public getPopularMovies = (query?: PopularParams) =>
    this.getPopular<MoviesResponse>(query);

  public getTopRatedMovies = (query?: TopRatedParams) =>
    this.getTopRated<MoviesResponse>(query);

  public getLists = (id: number, query?: ListsParams) =>
    this.get(this.endpoints.getLists(id), query);
}

export default MovieRequest;
