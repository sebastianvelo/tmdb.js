import {
  AccountStatesParams,
  ChangesParams,
  CreditsParams,
  DetailParams
} from "../../params/common/CommonParams";
import { ImagesParams, VideosParams } from "../../params/film/FilmParams";
import EndpointResource from "../../resource/EndpointResource";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImagesResponse,
  VideosResponse
} from "../../response/common/CommonResponse";
import {
  SeasonAccountStatesResponse,
  SeasonDetailsResponse,
  SeasonTranslationsResponse
} from "../../response/season/SeasonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class SeasonRequest extends TMDBRequest {
  protected resource = EndpointResource.TV;

  protected endpoints = Endpoints;

  public getDetails = (id: number, season: number, query?: DetailParams) =>
    this.get<SeasonDetailsResponse>(
      this.endpoints.GET_DETAILS(id, season),
      query
    );

  public getAccountStates = (
    id: number,
    season: number,
    query?: AccountStatesParams
  ) =>
    this.get<SeasonAccountStatesResponse>(
      this.endpoints.GET_ACCOUNT_STATES(id, season),
      query
    );

  public getChanges = (id: number, season: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.GET_CHANGES(id, season), query);

  public getCredits = (id: number, season: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.GET_CREDITS(id, season), query);

  public getExternalIds = (id: number, season: number) =>
    this.get<ExternalIDsResponse>(this.endpoints.GET_EXTERNAL_IDS(id, season));

  public getImages = (id: number, season: number, query?: ImagesParams) =>
    this.get<ImagesResponse>(this.endpoints.GET_IMAGES(id, season), query);

  public getTranslations = (id: number, season: number) =>
    this.get<SeasonTranslationsResponse>(
      this.endpoints.GET_TRANSLATIONS(id, season)
    );

  public getVideos = (id: number, season: number, query?: VideosParams) =>
    this.get<VideosResponse>(this.endpoints.GET_VIDEOS(id, season), query);
}

export default SeasonRequest;
