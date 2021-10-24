import { ChangesParams, CreditsParams } from "../../params/common/CommonParams";
import {
  FilmAlternativeTitlesParams,
  ImagesParams,
  LatestParams,
  ListsParams,
  PopularParams,
  RecommendationsParams,
  ReviewsParams,
  SimilarParams,
  TopRatedParams,
  VideosParams
} from "../../params/film/FilmParams";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImagesResponse
} from "../../response/common/CommonResponse";
import { FilmAlternativeTitlesResponse } from "../../response/film/FilmResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";

abstract class FilmRequest extends TMDBRequest {
  protected endpoints = Endpoints;

  public getAlternativeTitles = (
    id: number,
    query?: FilmAlternativeTitlesParams
  ) =>
    this.get<FilmAlternativeTitlesResponse>(
      this.endpoints.GET_ALTERNATIVE_TITLES(id),
      query
    );

  public getChanges = (id: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.GET_CHANGES(id), query);

  public getCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.GET_CREDITS(id), query);

  public getExternalIds = (id: number) =>
    this.get<ExternalIDsResponse>(this.endpoints.GET_EXTERNAL_IDS(id));

  public getImages = (id: number, query?: ImagesParams) =>
    this.get<ImagesResponse>(this.endpoints.GET_IMAGES(id), query);

  public getKeywords = (id: number) =>
    this.get(this.endpoints.GET_KEYWORDS(id));

  public getLists = (id: number, query?: ListsParams) =>
    this.get(this.endpoints.GET_LISTS(id), query);

  public getRecommendations = (id: number, query?: RecommendationsParams) =>
    this.get(this.endpoints.GET_RECOMMENDATIONS(id), query);

  public getRelaseDates = (id: number) =>
    this.get(this.endpoints.GET_RELEASE_DATES(id));

  public getReviews = (id: number, query?: ReviewsParams) =>
    this.get(this.endpoints.GET_REVIEWS(id), query);

  public getSimilars = (id: number, query?: SimilarParams) =>
    this.get(this.endpoints.GET_SIMILAR(id), query);

  public getTranslations = (id: number) =>
    this.get(this.endpoints.GET_TRANSLATIONS(id));

  public getVideos = (id: number, query?: VideosParams) =>
    this.get(this.endpoints.GET_VIDEOS(id), query);

  public getWatchProviders = (id: number) =>
    this.get(this.endpoints.GET_WATCH_PRIVDERS(id));

  public getLatest = (query?: LatestParams) =>
    this.get(this.endpoints.GET_LATEST(), query);

  public getPopular = (query?: PopularParams) =>
    this.get(this.endpoints.GET_POPULAR(), query);

  public getTopRated = (query?: TopRatedParams) =>
    this.get(this.endpoints.GET_TOP_RATED(), query);
}

export default FilmRequest;
