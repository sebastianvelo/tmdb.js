import { LanguageParams, PageParams, RegionParams } from "../../../common/params/Params";

export interface DetailsParams extends LanguageParams {
  append_to_response?: string;
}
export interface AlternativeTitlesParams {
  country?: string;
}
export interface ChangesParams extends PageParams {
  start_date?: string;
  end_date?: string;
}
export interface ImagesParams extends LanguageParams {
  include_image_language?: string;
}
export interface CreditsParams extends LanguageParams {}
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
