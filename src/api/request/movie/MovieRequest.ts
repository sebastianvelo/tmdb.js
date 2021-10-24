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
import EndpointResource from "../../resource/EndpointResource";
import {
  MoviesResponse,
  TVShowsResponse
} from "../../common/response/CommonResponse";
import {
  MovieDetailsResponse,
  MovieReleaseDatesResponse,
  MovieTranslationsResponse
} from "./response/Response";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class MovieRequest extends FilmRequest {
  protected resource = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<MovieDetailsResponse>(this.endpoints.GET_DETAILS(id), query);

  public getNowPlaying = (query?: NowPlayingParams) =>
    this.get<MoviesResponse>(this.endpoints.GET_NOW_PLAYING(), query);

  public getUpcoming = (query?: UpcomingParams) =>
    this.get<MoviesResponse>(this.endpoints.GET_UPCOMING(), query);

  public getRelaseDates = (id: number) =>
    this.get<MovieReleaseDatesResponse>(this.endpoints.GET_RELEASE_DATES(id));
    
  public getMovieRecommendations = (
    id: number,
    query?: RecommendationsParams
  ) => super.getRecommendations<MoviesResponse>(id, query);

  protected getSimilarShows = (id: number, query?: SimilarParams) =>
    super.getSimilars<MoviesResponse>(id, query);

  protected getLatestShows = (query?: LatestParams) =>
    super.getLatest<MoviesResponse>(query);

  protected getPopularShows = (query?: PopularParams) =>
    super.getPopular<MoviesResponse>(query);

  protected getTopRatedShows = (query?: TopRatedParams) =>
    super.getTopRated<TVShowsResponse>(query);

  public getShowTranslations = (id: number) =>
    super.getTranslations<MovieTranslationsResponse>(id);


  public getLists = (id: number, query?: ListsParams) =>
  this.get(this.endpoints.GET_LISTS(id), query);
}

export default MovieRequest;
