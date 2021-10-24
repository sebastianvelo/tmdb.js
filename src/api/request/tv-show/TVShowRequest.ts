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
import EndpointResource from "../../resource/EndpointResource";
import {
  AccountStatesResponse,
  TVShowsResponse
} from "../../common/response/CommonResponse";
import {
  TVShowDetailsResponse,
  TVShowTranslationsResponse
} from "./response/Response";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class TVShowRequest extends FilmRequest {
  protected resource = EndpointResource.TV;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<TVShowDetailsResponse>(this.endpoints.GET_DETAILS(id), query);

  public getAccountStates = (id: number, query?: AccountStatesParams) =>
    this.get<AccountStatesResponse>(
      this.endpoints.GET_ACCOUNT_STATES(id),
      query
    );

  public getAggregateCredits = (id: number, query?: any) =>
    this.get(this.endpoints.GET_AGGREGATE_CREDITS(id), query);

  public getContentRatings = (id: number, query?: any) =>
    this.get(this.endpoints.GET_CONTENT_RATINGS(id), query);

  public getEpisodeGroups = (id: number, query?: any) =>
    this.get(this.endpoints.GET_EPISODE_GROUPS(id), query);

  public getShowTranslations = (id: number) =>
    super.getTranslations<TVShowTranslationsResponse>(id);

  public getScreenedTheatrically = (id: number) =>
    this.get<TVShowsResponse>(this.endpoints.GET_SCREENED_THEATRICALLY(id));

  public getAiringToday = (query?: any) =>
    this.get<TVShowsResponse>(this.endpoints.GET_AIRING_TODAY(), query);

  public getOnTheAir = (query?: any) =>
    this.get<TVShowsResponse>(this.endpoints.GET_ON_THE_AIR(), query);

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
