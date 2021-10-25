import { DetailParams } from "../../common/params/CommonParams";
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
import Resource from "../../resource/Resource";
import {
  MoviesResponse,
  TVShowsResponse
} from "../../common/response/CommonResponse";
import {
  MovieResponse,
  MovieReleaseDatesResponse,
  MovieTranslationsResponse
} from "./response/Response";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class MovieRequest extends FilmRequest {
  protected resource = Resource.MOVIE;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<MovieResponse>(this.endpoints.getDetails(id), query);

  public getNowPlaying = (query?: NowPlayingParams) =>
    this.get<MoviesResponse>(this.endpoints.getNowPlaying(), query);

  public getUpcoming = (query?: UpcomingParams) =>
    this.get<MoviesResponse>(this.endpoints.getUpcoming(), query);

  public getRelaseDates = (id: number) =>
    this.get<MovieReleaseDatesResponse>(this.endpoints.getReleaseDates(id));

  public getMovieRecommendations = (
    id: number,
    query?: RecommendationsParams
  ) => super.getRecommendations<MoviesResponse>(id, query);

  public getSimilarShows = (id: number, query?: SimilarParams) =>
    super.getSimilars<MoviesResponse>(id, query);

  public getLatestShows = (query?: LatestParams) =>
    super.getLatest<MoviesResponse>(query);

  public getPopularShows = (query?: PopularParams) =>
    super.getPopular<MoviesResponse>(query);

  public getTopRatedShows = (query?: TopRatedParams) =>
    super.getTopRated<TVShowsResponse>(query);

  public getShowTranslations = (id: number) =>
    super.getTranslations<MovieTranslationsResponse>(id);

  public getLists = (id: number, query?: ListsParams) =>
    this.get(this.endpoints.getLists(id), query);
}

export default MovieRequest;
