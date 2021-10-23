import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { AlternativeTitles } from "./model/Models";
import {
  AlternativeTitlesParams,
  ChangesParams,
  CreditsParams, ImagesParams,
  LatestParams,
  ListsParams, PopularParams,
  RecommendationsParams,
  ReviewsParams,
  SimilarParams,
  TopRatedParams, VideosParams
} from "./params/Params";

abstract class Film extends TMDBRequest {
  protected endpoints = Endpoints;

  public getAlternativeTitles = (
    id: string,
    params?: AlternativeTitlesParams
  ) =>
    this.get<AlternativeTitles>(
      this.endpoints.GET_ALTERNATIVE_TITLES(id),
      params
    );

  public getChanges = (id: string, params?: ChangesParams) =>
    this.get(this.endpoints.GET_CHANGES(id), params);

  public getCredits = (id: string, params?: CreditsParams) =>
    this.get(this.endpoints.GET_CREDITS(id), params);

  public getExternalIds = (id: string) =>
    this.get(this.endpoints.GET_EXTERNAL_IDS(id));

  public getImages = (id: string, params?: ImagesParams) =>
    this.get(this.endpoints.GET_IMAGES(id), params);

  public getKeywords = (id: string) =>
    this.get(this.endpoints.GET_KEYWORDS(id));

  public getLists = (id: string, params?: ListsParams) =>
    this.get(this.endpoints.GET_LISTS(id), params);

  public getRecommendations = (id: string, params?: RecommendationsParams) =>
    this.get(this.endpoints.GET_RECOMMENDATIONS(id), params);

  public getRelaseDates = (id: string) =>
    this.get(this.endpoints.GET_RELEASE_DATES(id));

  public getReviews = (id: string, params?: ReviewsParams) =>
    this.get(this.endpoints.GET_REVIEWS(id), params);

  public getSimilars = (id: string, params?: SimilarParams) =>
    this.get(this.endpoints.GET_SIMILAR(id), params);

  public getTranslations = (id: string) =>
    this.get(this.endpoints.GET_TRANSLATIONS(id));

  public getVideos = (id: string, params?: VideosParams) =>
    this.get(this.endpoints.GET_VIDEOS(id), params);

  public getWatchProviders = (id: string) =>
    this.get(this.endpoints.GET_WATCH_PRIVDERS(id));

  public getLatest = (params?: LatestParams) =>
    this.get(this.endpoints.GET_LATEST(), params);

  public getPopular = (params?: PopularParams) =>
    this.get(this.endpoints.GET_POPULAR(), params);

  public getTopRated = (params?: TopRatedParams) =>
    this.get(this.endpoints.GET_TOP_RATED(), params);

}

export default Film;
