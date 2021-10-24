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
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

class PersonRequest extends TMDBRequest {
  protected resource = EndpointResource.PERSON;

  protected endpoints = Endpoints;

  public getDetails = (id: number, query?: DetailParams) =>
    this.get(this.endpoints.GET_DETAILS(id), query);

  public getChanges = (id: number, query?: ChangesParams) =>
    this.get(this.endpoints.GET_CHANGES(id), query);

  public getTVShowCredits = (id: number, query?: CreditsParams) =>
    this.get(this.endpoints.GET_TV_CREDITS(id), query);

  public getMovieCredits = (id: number, query?: CreditsParams) =>
    this.get(this.endpoints.GET_MOVIE_CREDITS(id), query);

  public getCombinedCredits = (id: number, query?: CreditsParams) =>
    this.get(this.endpoints.GET_COMBINED_CREDITS(id), query);

  public getExternalIds = (id: number, query?: ExternalIdParams) =>
    this.get(this.endpoints.GET_EXTERNAL_IDS(id), query);

  public getImages = (id: number) => this.get(this.endpoints.GET_IMAGES(id));

  public getTaggedImages = (id: number, query?: TaggedImagesParams) =>
    this.get(this.endpoints.GET_TAGGED_IMAGES(id), query);

  public getTranslations = (id: number, query?: TranslationsParams) =>
    this.get(this.endpoints.GET_TRANSLATIONS(id), query);

  public getLatest = (query?: LatestParams) =>
    this.get(this.endpoints.GET_LATEST(), query);

  public getPopular = (query?: PopularParams) =>
    this.get(this.endpoints.GET_POPULAR(), query);
}
export default PersonRequest;
