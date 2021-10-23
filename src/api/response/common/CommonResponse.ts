import { PaginableResponse } from "../../model/CommonModels";
import { Episode } from "../../model/film/Film";
import { Genre } from "../../model/genre/Genre";
import { KeywordDetailResponse } from "../keyword/Keyword";
import { Person } from "../../model/person/Person";
import MovieRequest from "../../request/movie/MovieRequest";
import TVShowRequest from "../../request/tv-show/TVShowRequest";
import { Company } from "../../model/company/Company";

export type MoviesResponse = PaginableResponse<MovieRequest>;
export type TVShowsResponse = PaginableResponse<TVShowRequest>;
export type EpisodesResponse = PaginableResponse<Episode>;
export type AllMediaTypesResponse = PaginableResponse<(Person | TVShowRequest | MovieRequest)>;
export type PeopleResponse = PaginableResponse<Person>;
export type KeywordsResponse = PaginableResponse<KeywordDetailResponse>;
export type CompaniesResponse = PaginableResponse<Company>;

export interface GenresResponse {
    genres?: Genre[];
  };