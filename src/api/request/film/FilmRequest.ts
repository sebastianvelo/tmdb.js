import { ChangesParams, CreditsParams } from "../../common/params/CommonParams";
import {
  FilmAlternativeTitlesParams,
  ImagesParams,
  LatestParams, PopularParams,
  RecommendationsParams,
  ReviewsParams,
  SimilarParams,
  TopRatedParams,
  VideosParams
} from "./params/Params";
import {
  ChangesResponse,
  CreditsResponse,
  ExternalIDsResponse,
  ImagesResponse,
  KeywordsResponse,
  ReviewsResponse,
  VideosResponse
} from "../../common/response/CommonResponse";
import { FilmAlternativeTitlesResponse } from "./response/Response";
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
    this.get<KeywordsResponse>(this.endpoints.GET_KEYWORDS(id));

  public getReviews = (id: number, query?: ReviewsParams) =>
    this.get<ReviewsResponse>(this.endpoints.GET_REVIEWS(id), query);

  public getVideos = (id: number, query?: VideosParams) =>
    this.get<VideosResponse>(this.endpoints.GET_VIDEOS(id), query);

  public getWatchProviders = (id: number) =>
    this.get(this.endpoints.GET_WATCH_PRIVDERS(id));

  public getTranslations = <T>(id: number) =>
    this.get<T>(this.endpoints.GET_TRANSLATIONS(id));

  protected getRecommendations = <T>(
    id: number,
    query?: RecommendationsParams
  ) => this.get<T>(this.endpoints.GET_RECOMMENDATIONS(id), query);

  protected getSimilars = <T>(id: number, query?: SimilarParams) =>
    this.get<T>(this.endpoints.GET_SIMILAR(id), query);

  public getLatest = <T>(query?: LatestParams) =>
    this.get<T>(this.endpoints.GET_LATEST(), query);

  public getPopular = <T>(query?: PopularParams) =>
    this.get<T>(this.endpoints.GET_POPULAR(), query);

  public getTopRated = <T>(query?: TopRatedParams) =>
    this.get<T>(this.endpoints.GET_TOP_RATED(), query);
}

export default FilmRequest;
