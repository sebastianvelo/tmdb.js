import { DetailParams } from "../../params/common/CommonParams";
import EndpointResource from "../../resource/EndpointResource";
import { TVShowDetailResponse } from "../../response/tv-show/TVShowResponse";
import FilmRequest from "../film/FilmRequest";
import Endpoints from "./endpoints/Endpoints";

class TVShowRequest extends FilmRequest {
  protected resource = EndpointResource.MOVIE;

  protected endpoints = { ...super.endpoints, ...Endpoints };

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<TVShowDetailResponse>(this.endpoints.GET_DETAILS(id), query);

  public getAccountStates = (id: number, query?: any) =>
    this.get(this.endpoints.GET_ACCOUNT_STATES(id), query);

  public getAggregateCredits = (id: number, query?: any) =>
    this.get(this.endpoints.GET_AGGREGATE_CREDITS(id), query);

  public getContentRatings = (id: number, query?: any) =>
    this.get(this.endpoints.GET_CONTENT_RATINGS(id), query);

  public getEpisodeGroups = (id: number, query?: any) =>
    this.get(this.endpoints.GET_EPISODE_GROUPS(id), query);

  public getScreenedTheatrically = (id: number) =>
    this.get(this.endpoints.GET_SCREENED_THEATRICALLY(id));

  public getAiringToday = (query?: any) =>
    this.get(this.endpoints.GET_AIRING_TODAY(), query);

  public getOnTheAir = (query?: any) =>
    this.get(this.endpoints.GET_ON_THE_AIR(), query);
}

export default TVShowRequest;
