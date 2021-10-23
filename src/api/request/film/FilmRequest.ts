import { FilmAlternativeTitlesResponse } from "../../response/film/FilmResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import {
  AlternativeTitlesParams,
  ChangesParams,
  CreditsParams,
  ImagesParams,
  LatestParams,
  ListsParams,
  PopularParams,
  RecommendationsParams,
  ReviewsParams,
  SimilarParams,
  TopRatedParams,
  VideosParams
} from "./params/Params";

abstract class FilmRequest extends TMDBRequest {
  protected endpoints = Endpoints;

  public getAlternativeTitles = (id: string, query?: AlternativeTitlesParams) =>
    this.get<FilmAlternativeTitlesResponse>(
      this.endpoints.GET_ALTERNATIVE_TITLES(id),
      query
    );

  public getChanges = (id: string, query?: ChangesParams) =>
    this.get(this.endpoints.GET_CHANGES(id), query);

  public getCredits = (id: string, query?: CreditsParams) =>
    this.get(this.endpoints.GET_CREDITS(id), query);

  public getExternalIds = (id: string) =>
    this.get(this.endpoints.GET_EXTERNAL_IDS(id));

  public getImages = (id: string, query?: ImagesParams) =>
    this.get(this.endpoints.GET_IMAGES(id), query);

  public getKeywords = (id: string) =>
    this.get(this.endpoints.GET_KEYWORDS(id));

  public getLists = (id: string, query?: ListsParams) =>
    this.get(this.endpoints.GET_LISTS(id), query);

  public getRecommendations = (id: string, query?: RecommendationsParams) =>
    this.get(this.endpoints.GET_RECOMMENDATIONS(id), query);

  public getRelaseDates = (id: string) =>
    this.get(this.endpoints.GET_RELEASE_DATES(id));

  public getReviews = (id: string, query?: ReviewsParams) =>
    this.get(this.endpoints.GET_REVIEWS(id), query);

  public getSimilars = (id: string, query?: SimilarParams) =>
    this.get(this.endpoints.GET_SIMILAR(id), query);

  public getTranslations = (id: string) =>
    this.get(this.endpoints.GET_TRANSLATIONS(id));

  public getVideos = (id: string, query?: VideosParams) =>
    this.get(this.endpoints.GET_VIDEOS(id), query);

  public getWatchProviders = (id: string) =>
    this.get(this.endpoints.GET_WATCH_PRIVDERS(id));

  public getLatest = (query?: LatestParams) =>
    this.get(this.endpoints.GET_LATEST(), query);

  public getPopular = (query?: PopularParams) =>
    this.get(this.endpoints.GET_POPULAR(), query);

  public getTopRated = (query?: TopRatedParams) =>
    this.get(this.endpoints.GET_TOP_RATED(), query);
}

export default FilmRequest;
