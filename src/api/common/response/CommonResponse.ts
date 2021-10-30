import { Change } from "../../model/changes/Changes";
import { TMDBEntityModel, Translation } from "../../model/CommonModels";
import { Company } from "../../model/company/Company";
import { Movie, TVShow } from "../../model/film/Film";
import { Image } from "../../model/image/Image";
import { Person, PersonDetail } from "../../model/person/Person";
import { KeywordResponse } from "../../request/keyword/response/Response";
import { Video } from "../../model/video/Video";
import { ReviewResponse } from "../../request/review/response/Response";
import { CreditPerson, CrewPerson } from "../../model/credit/Credit";
import { Episode } from "../../model/episode/Episode";

export type MoviesResponse = PaginableResponse<Movie>;
export type TVShowsResponse = PaginableResponse<TVShow>;
export type EpisodesResponse = PaginableResponse<Episode>;
export type AllMediaTypesResponse = PaginableResponse<Person | TVShow | Movie>;
export type PeopleResponse = PaginableResponse<PersonDetail>;
export type CompaniesResponse = PaginableResponse<Company>;
export type ImageListResponse = PaginableResponse<Image>;
export type ReviewsResponse = PaginableResponse<ReviewResponse>;
export type KeywordsResponse = ListResponse<KeywordResponse>;
export type VideosResponse = ListResponse<Video>;
export interface ChangesResponse {
  changes?: Change[];
}
export interface AccountStatesResponse extends TMDBEntityModel {
  rated: { value: number } | boolean;
}
export interface CreditsResponse extends TMDBEntityModel {
  cast: CreditPerson[];
  crew: CrewPerson[];
}
export interface ExternalIDsResponse extends TMDBEntityModel {
  imdb_id?: string | null;
  facebook_id?: string | null;
  instagram_id?: string | null;
  twitter_id?: string | null;
}
export interface ImagesResponse extends TMDBEntityModel {
  backdrops?: Image[];
  posters?: Image[];
}

export interface ListResponse<T> extends TMDBEntityModel {
  results?: T[];
}

export type PaginableResponse<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};

export interface TranslationsResponse<T> extends TMDBEntityModel {
  translations?: Translation<T>[];
}
