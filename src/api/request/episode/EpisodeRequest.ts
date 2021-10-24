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
  ImagesResponse
} from "../../response/common/CommonResponse";
import {
  EpisodeAccountStatesResponse,
  EpisodeDetailsResponse
} from "../../response/episode/EpisodeResponse";
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
    this.get(this.endpoints.GET_TRANSLATIONS(id, season, episode));

  public getVideos = (
    id: number,
    season: number,
    episode: number,
    query?: VideosParams
  ) => this.get(this.endpoints.GET_VIDEOS(id, season, episode), query);
}

export default EpisodeRequest;
