import { Change } from "../../model/changes/Changes";
import { PaginableResponse, TMDBEntity } from "../../model/CommonModels";
import { Company } from "../../model/company/Company";
import { Episode, Movie, TVShow } from "../../model/film/Film";
import { Genre } from "../../model/genre/Genre";
import { Logo } from "../../model/logo/Logo";
import { Person } from "../../model/person/Person";
import { KeywordDetailResponse } from "../keyword/KeywordResponse";

export type MoviesResponse = PaginableResponse<Movie>;
export type TVShowsResponse = PaginableResponse<TVShow>;
export type EpisodesResponse = PaginableResponse<Episode>;
export type AllMediaTypesResponse = PaginableResponse<Person | TVShow | Movie>;
export type PeopleResponse = PaginableResponse<Person>;
export type KeywordsResponse = PaginableResponse<KeywordDetailResponse>;
export type CompaniesResponse = PaginableResponse<Company>;

export interface GenresResponse {
  genres?: Genre[];
}

export interface AccountStatesResponse extends TMDBEntity {
  rated: { value: number } | boolean;
}

export interface ChangesResponse {
  changes?: Change[];
}

interface CreditPerson extends TMDBEntity {
  adult?: boolean;
  gender?: number | null;
  known_for_department?: string;
  name?: string;
  original_name?: string;
  popularity?: number;
  profile_path?: string | null;
  cast_id?: number;
  character?: string;
  credit_id?: string;
  order?: number;
}

interface CrewPerson extends CreditPerson {
  department?: string;
  job?: string;
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
  backdrops?: Logo[];
  posters?: Logo[];
}
