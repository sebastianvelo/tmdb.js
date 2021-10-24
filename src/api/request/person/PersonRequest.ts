import {
  ChangesParams,
  CreditsParams,
  DetailParams
} from "../../params/common/CommonParams";
import {
  ExternalIdParams,
  LatestParams,
  PopularParams,
  TaggedImagesParams,
  TranslationsParams
} from "../../params/person/PersonParams";
import EndpointResource from "../../resource/EndpointResource";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImageListResponse,
  ImagesResponse,
  PeopleResponse
} from "../../response/common/CommonResponse";
import {
  PersonDetailsResponse,
  PersonTranslationsResponse
} from "../../response/person/PersonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class PersonRequest extends TMDBRequest {
  protected resource = EndpointResource.PERSON;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get<PersonDetailsResponse>(this.endpoints.GET_DETAILS(id), query);

  public getChanges = (id: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.GET_CHANGES(id), query);

  public getTVShowCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.GET_TV_CREDITS(id), query);

  public getMovieCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.GET_MOVIE_CREDITS(id), query);

  public getCombinedCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.GET_COMBINED_CREDITS(id), query);

  public getExternalIds = (id: number, query?: ExternalIdParams) =>
    this.get<ExternalIDsResponse>(this.endpoints.GET_EXTERNAL_IDS(id), query);

  public getImages = (id: number) =>
    this.get<ImagesResponse>(this.endpoints.GET_IMAGES(id));

  public getTaggedImages = (id: number, query?: TaggedImagesParams) =>
    this.get<ImageListResponse>(this.endpoints.GET_TAGGED_IMAGES(id), query);

  public getTranslations = (id: number, query?: TranslationsParams) =>
    this.get<PersonTranslationsResponse>(
      this.endpoints.GET_TRANSLATIONS(id),
      query
    );

  public getLatest = (query?: LatestParams) =>
    this.get<PersonDetailsResponse>(this.endpoints.GET_LATEST(), query);

  public getPopular = (query?: PopularParams) =>
    this.get<PeopleResponse>(this.endpoints.GET_POPULAR(), query);
}
export default PersonRequest;
