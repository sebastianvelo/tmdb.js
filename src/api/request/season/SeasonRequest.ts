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
  ImagesResponse,
  VideosResponse
} from "../../common/response/CommonResponse";
import {
  SeasonAccountStatesResponse,
  SeasonDetailsResponse,
  SeasonTranslationsResponse
} from "./response/Response";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class SeasonRequest extends TMDBRequest {
  protected resource = EndpointResource.TV;

  protected endpoints = Endpoints;

  public getDetails = (id: number, season: number, query?: DetailParams) =>
    this.get<SeasonDetailsResponse>(
      this.endpoints.getDetails(id, season),
      query
    );

  public getAccountStates = (
    id: number,
    season: number,
    query?: AccountStatesParams
  ) =>
    this.get<SeasonAccountStatesResponse>(
      this.endpoints.getAccountStates(id, season),
      query
    );

  public getChanges = (id: number, season: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.getChanges(id, season), query);

  public getCredits = (id: number, season: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.getCredits(id, season), query);

  public getExternalIds = (id: number, season: number) =>
    this.get<ExternalIDsResponse>(this.endpoints.getExternalIDs(id, season));

  public getImages = (id: number, season: number, query?: ImagesParams) =>
    this.get<ImagesResponse>(this.endpoints.getImages(id, season), query);

  public getTranslations = (id: number, season: number) =>
    this.get<SeasonTranslationsResponse>(
      this.endpoints.getTranslations(id, season)
    );

  public getVideos = (id: number, season: number, query?: VideosParams) =>
    this.get<VideosResponse>(this.endpoints.getVideos(id, season), query);
}

export default SeasonRequest;
