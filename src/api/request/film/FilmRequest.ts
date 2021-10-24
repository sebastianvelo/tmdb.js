import { ChangesParams, CreditsParams } from "../../common/params/CommonParams";
import {
  FilmAlternativeTitlesParams,
  ImagesParams,
  LatestParams,
  PopularParams,
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
      this.endpoints.getAlternativeTitles(id),
      query
    );

  public getChanges = (id: number, query?: ChangesParams) =>
    this.get<ChangesResponse>(this.endpoints.getChanges(id), query);

  public getCredits = (id: number, query?: CreditsParams) =>
    this.get<CreditsResponse>(this.endpoints.getCredits(id), query);

  public getExternalIds = (id: number) =>
    this.get<ExternalIDsResponse>(this.endpoints.getExternalIDs(id));

  public getImages = (id: number, query?: ImagesParams) =>
    this.get<ImagesResponse>(this.endpoints.getImages(id), query);

  public getKeywords = (id: number) =>
    this.get<KeywordsResponse>(this.endpoints.getKeywords(id));

  public getReviews = (id: number, query?: ReviewsParams) =>
    this.get<ReviewsResponse>(this.endpoints.getReviews(id), query);

  public getVideos = (id: number, query?: VideosParams) =>
    this.get<VideosResponse>(this.endpoints.getVideos(id), query);

  public getWatchProviders = (id: number) =>
    this.get(this.endpoints.getWatchProviders(id));

  public getTranslations = <T>(id: number) =>
    this.get<T>(this.endpoints.getTranslations(id));

  protected getRecommendations = <T>(
    id: number,
    query?: RecommendationsParams
  ) => this.get<T>(this.endpoints.getRecommendations(id), query);

  protected getSimilars = <T>(id: number, query?: SimilarParams) =>
    this.get<T>(this.endpoints.getSimilar(id), query);

  protected getLatest = <T>(query?: LatestParams) =>
    this.get<T>(this.endpoints.getLatest(), query);

  protected getPopular = <T>(query?: PopularParams) =>
    this.get<T>(this.endpoints.getPopular(), query);

  protected getTopRated = <T>(query?: TopRatedParams) =>
    this.get<T>(this.endpoints.getTopRated(), query);
}

export default FilmRequest;
