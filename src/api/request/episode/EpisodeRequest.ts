import {
  AccountStatesParams,
  ChangesParams,
  CreditsParams,
  DetailParams
} from "../../common/params/CommonParams";
import { ImagesParams, VideosParams } from "../film/params/Params";
import EndpointResource from "../../resource/EndpointResource";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImagesResponse
} from "../../common/response/CommonResponse";
import {
  EpisodeAccountStatesResponse,
  EpisodeDetailsResponse,
  EpisodeTranslationsResponse
} from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class EpisodeRequest extends TMDBRequest {
  protected resource = EndpointResource.TV;

  protected endpoints = Endpoints;

  public getDetails = (
    id: number,
    season: number,
    episode: number,
    query?: DetailParams
  ) =>
    this.get<EpisodeDetailsResponse>(
      this.endpoints.GET_DETAILS(id, season, episode),
      query
    );

  public getAccountStates = (
    id: number,
    season: number,
    episode: number,
    query?: AccountStatesParams
  ) =>
    this.get<EpisodeAccountStatesResponse>(
      this.endpoints.GET_ACCOUNT_STATES(id, season, episode),
      query
    );

  public getChanges = (
    id: number,
    season: number,
    episode: number,
    query?: ChangesParams
  ) =>
    this.get<ChangesResponse>(
      this.endpoints.GET_CHANGES(id, season, episode),
      query
    );

  public getCredits = (
    id: number,
    season: number,
    episode: number,
    query?: CreditsParams
  ) =>
    this.get<CreditsResponse>(
      this.endpoints.GET_CREDITS(id, season, episode),
      query
    );

  public getExternalIds = (id: number, season: number, episode: number) =>
    this.get<ExternalIDsResponse>(
      this.endpoints.GET_EXTERNAL_IDS(id, season, episode)
    );

  public getImages = (
    id: number,
    season: number,
    episode: number,
    query?: ImagesParams
  ) => this.get<ImagesResponse>(this.endpoints.GET_IMAGES(id, season, episode), query);

  public getTranslations = (id: number, season: number, episode: number) =>
    this.get<EpisodeTranslationsResponse>(this.endpoints.GET_TRANSLATIONS(id, season, episode));

  public getVideos = (
    id: number,
    season: number,
    episode: number,
    query?: VideosParams
  ) => this.get(this.endpoints.GET_VIDEOS(id, season, episode), query);
}

export default EpisodeRequest;
