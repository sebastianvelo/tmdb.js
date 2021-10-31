import {
  AccountStatesParams,
  ChangesParams,
  CreditsParams,
  DetailParams
} from "../../common/params/CommonParams";
import { ImagesParams, VideosParams } from "../film/params/Params";
import Resource from "../../resource/Resource";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImagesResponse,
  VideosResponse
} from "../../common/response/CommonResponse";
import {
  EpisodeAccountStatesResponse,
  EpisodeResponse,
  EpisodeTranslationsResponse
} from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class EpisodeRequest extends TMDBRequest {
  protected resource = Resource.TV;

  protected endpoints = Endpoints;

  public getDetails = (
    id: number,
    season: number,
    episode: number,
    query?: DetailParams
  ) =>
    this.get<EpisodeResponse>(
      this.endpoints.getDetails(id, season, episode),
      query
    );

  public getAccountStates = (
    id: number,
    season: number,
    episode: number,
    query?: AccountStatesParams
  ) =>
    this.get<EpisodeAccountStatesResponse>(
      this.endpoints.getAccountStates(id, season, episode),
      query
    );

  public getChanges = (
    id: number,
    season: number,
    episode: number,
    query?: ChangesParams
  ) =>
    this.get<ChangesResponse>(
      this.endpoints.getChanges(id, season, episode),
      query
    );

  public getCredits = (
    id: number,
    season: number,
    episode: number,
    query?: CreditsParams
  ) =>
    this.get<CreditsResponse>(
      this.endpoints.getCredits(id, season, episode),
      query
    );

  public getExternalIds = (id: number, season: number, episode: number) =>
    this.get<ExternalIDsResponse>(
      this.endpoints.getExternalIDs(id, season, episode)
    );

  public getImages = (
    id: number,
    season: number,
    episode: number,
    query?: ImagesParams
  ) => this.get<ImagesResponse>(this.endpoints.getImages(id, season, episode), query);

  public getTranslations = (id: number, season: number, episode: number) =>
    this.get<EpisodeTranslationsResponse>(this.endpoints.getTranslations(id, season, episode));

  public getVideos = (
    id: number,
    season: number,
    episode: number,
    query?: VideosParams
  ) => this.get<VideosResponse>(this.endpoints.getVideos(id, season, episode), query);
}

export default EpisodeRequest;
