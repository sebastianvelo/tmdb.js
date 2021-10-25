import {
  ChangesParams,
  CreditsParams,
  DetailParams
} from "../../common/params/CommonParams";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImageListResponse,
  ImagesResponse
} from "../../common/response/CommonResponse";
import Resource from "../../resource/Resource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import {
  ExternalIdParams,
  LatestParams,
  PopularParams,
  TaggedImagesParams,
  TranslationsParams
} from "./params/Params";
import {
  PersonDetailsResponse, PersonTranslationsResponse
} from "./response/Response";

class PersonRequest extends TMDBRequest {
  protected resource = Resource.PERSON;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<PersonDetailsResponse>(this.endpoints.getDetails(id), query);

  public getChanges = (id: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.getChanges(id), query);

  public getTVShowCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.getTVCredits(id), query);

  public getMovieCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.getMovieCredits(id), query);

  public getCombinedCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.getCombinedCredits(id), query);

  public getExternalIds = (id: number, query?: ExternalIdParams) =>
    this.get<ExternalIDsResponse>(this.endpoints.getExternalIDs(id), query);

  public getImages = (id: number) =>
    this.get<ImagesResponse>(this.endpoints.getImages(id));

  public getTaggedImages = (id: number, query?: TaggedImagesParams) =>
    this.get<ImageListResponse>(this.endpoints.getTaggedImages(id), query);

  public getTranslations = (id: number, query?: TranslationsParams) =>
    this.get<PersonTranslationsResponse>(
      this.endpoints.getTranslations(id),
      query
    );

  public getLatest = (query?: LatestParams) =>
    this.get<PersonDetailsResponse>(this.endpoints.getLatest(), query);

  public getPopular = (query?: PopularParams) =>
    this.get<PersonDetailsResponse>(this.endpoints.getPopular(), query);
}
export default PersonRequest;
