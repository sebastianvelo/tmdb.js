import { LanguageParams, PageParams, RegionParams } from "../Params";

export interface FilmAlternativeTitlesParams {
  country?: string;
}
export interface ImagesParams extends LanguageParams {
  include_image_language?: string;
}
export interface ListsParams extends LanguageParams, PageParams {}
export interface RecommendationsParams extends LanguageParams, PageParams {}
export interface ReviewsParams extends LanguageParams, PageParams {}
export interface SimilarParams extends LanguageParams, PageParams {}
export interface VideosParams extends LanguageParams {}
export interface LatestParams extends LanguageParams {}
export interface NowPlayingParams extends LanguageParams, PageParams, RegionParams {}
export interface PopularParams extends LanguageParams, PageParams, RegionParams {}
export interface TopRatedParams extends LanguageParams, PageParams, RegionParams {}
export interface UpcomingParams extends LanguageParams, PageParams, RegionParams {}
