import { PaginableResponse } from "../../common/model/CommonModels";
import { Episode } from "../../common/model/film/Film";
import { Genre } from "../../common/model/genre/Genre";
import { KeywordDetailResponse } from "../keyword/Keyword";
import { Person } from "../../common/model/person/Person";
import Movie from "../../request/movie/Movie";
import TVShow from "../../request/tv-show/TVShow";

export type MoviesResponse = PaginableResponse<Movie>;
export type TVShowsResponse = PaginableResponse<TVShow>;
export type EpisodesResponse = PaginableResponse<Episode>;
export type AllMediaTypesResponse = PaginableResponse<(Person | TVShow | Movie)>;
export type PeopleResponse = PaginableResponse<Person>;
export type KeywordsResponse = PaginableResponse<KeywordDetailResponse>;
export interface GenresResponse {
    genres?: Genre[];
  };