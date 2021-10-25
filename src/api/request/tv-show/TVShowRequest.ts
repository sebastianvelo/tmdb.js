import {
  AccountStatesParams,
  DetailParams
} from "../../common/params/CommonParams";
import {
  LatestParams,
  PopularParams,
  RecommendationsParams,
  SimilarParams,
  TopRatedParams
} from "../film/params/Params";
import Resource from "../../resource/Resource";
import {
  AccountStatesResponse,
  TVShowsResponse
} from "../../common/response/CommonResponse";
import {
  TVShowResponse,
  TVShowTranslationsResponse
} from "./response/Response";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class TVShowRequest extends FilmRequest {
  protected resource = Resource.TV;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<TVShowResponse>(this.endpoints.getDetails(id), query);

  public getAccountStates = (id: number, query?: AccountStatesParams) =>
    this.get<AccountStatesResponse>(
      this.endpoints.getAccountStates(id),
      query
    );

  public getAggregateCredits = (id: number, query?: any) =>
    this.get(this.endpoints.getAggregateCredits(id), query);

  public getContentRatings = (id: number, query?: any) =>
    this.get(this.endpoints.getContentRatings(id), query);

  public getEpisodeGroups = (id: number, query?: any) =>
    this.get(this.endpoints.getEpisodeGroups(id), query);

  public getShowTranslations = (id: number) =>
    super.getTranslations<TVShowTranslationsResponse>(id);

  public getScreenedTheatrically = (id: number) =>
    this.get<TVShowsResponse>(this.endpoints.getScreenedTheatrically(id));

  public getAiringToday = (query?: any) =>
    this.get<TVShowsResponse>(this.endpoints.getAiringToday(), query);

  public getOnTheAir = (query?: any) =>
    this.get<TVShowsResponse>(this.endpoints.getOnTheAir(), query);

  protected getSimilarShows = (id: number, query?: SimilarParams) =>
    super.getSimilars<TVShowsResponse>(id, query);

  public getLatestShows = (query?: LatestParams) =>
    super.getLatest<TVShowsResponse>(query);

  public getPopularShows = (query?: PopularParams) =>
    super.getPopular<TVShowsResponse>(query);

  public getTopRatedShows = (query?: TopRatedParams) =>
    super.getTopRated<TVShowsResponse>(query);

  public getTVRecommendations = (id: number, query?: RecommendationsParams) =>
    super.getRecommendations<TVShowsResponse>(id, query);
}

export default TVShowRequest;
