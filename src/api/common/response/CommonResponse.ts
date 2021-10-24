import { Change } from "../../model/changes/Changes";
import { TMDBEntity, Translation } from "../../model/CommonModels";
import { Company } from "../../model/company/Company";
import { Movie, TVShow } from "../../model/film/Film";
import { Genre } from "../../model/genre/Genre";
import { Image } from "../../model/image/Image";
import { Person } from "../../model/person/Person";
import { KeywordDetailResponse } from "../../request/keyword/response/Response";
import { Video } from "../../model/video/Video";
import { ReviewDetailsResponse } from "../../request/review/response/Response";
import { CreditPerson, CrewPerson } from "../../model/credit/Credit";
import { Episode } from "../../model/episode/Episode";

export type MoviesResponse = PaginableResponse<Movie>;
export type TVShowsResponse = PaginableResponse<TVShow>;
export type EpisodesResponse = PaginableResponse<Episode>;
export type AllMediaTypesResponse = PaginableResponse<Person | TVShow | Movie>;
export type PeopleResponse = PaginableResponse<Person>;
export type CompaniesResponse = PaginableResponse<Company>;
export type ImageListResponse = PaginableResponse<Image>;
export type ReviewsResponse = PaginableResponse<ReviewDetailsResponse>;
export type KeywordsResponse = ListResponse<KeywordDetailResponse>;
export type VideosResponse = ListResponse<Video>;
export interface GenresResponse {
  genres?: Genre[];
}
export interface ChangesResponse {
  changes?: Change[];
}
export interface AccountStatesResponse extends TMDBEntity {
  rated: { value: number } | boolean;
}
export interface CreditsResponse extends TMDBEntity {
  cast: CreditPerson[];
  crew: CrewPerson[];
}
export interface ExternalIDsResponse extends TMDBEntity {
  imdb_id?: string | null;
  facebook_id?: string | null;
  instagram_id?: string | null;
  twitter_id?: string | null;
}
export interface ImagesResponse extends TMDBEntity {
  backdrops?: Image[];
  posters?: Image[];
}

export interface ListResponse<T> extends TMDBEntity {
  results?: T[];
}

export type PaginableResponse<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};

export interface TranslationsResponse<T> extends TMDBEntity {
  translations?: Translation<T>[];
}
