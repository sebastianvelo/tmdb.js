import { TMDBEntity } from "../../model/CommonModels";
import { ProductionCompany, ProductionCountry } from "../../model/company/Company";
import { SpokenLanguage, MovieStatus, AlternativeTitle } from "../../model/film/Film";
import { Genre } from "../../model/genre/Genre";

export interface FilmDetailsResponse {
  budget?: number;
  genres?: Genre[];
  homepage?: string | null;
  imdb?: string | null;
  production_companies?: ProductionCompany[];
  production_countries?: ProductionCountry[];
  revenue?: number;
  runtime?: number | null;
  spoken_languages?: SpokenLanguage[];
  status?: MovieStatus;
  tagline?: string | null;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
};

export interface FilmAlternativeTitlesResponse extends TMDBEntity {
  titles?: AlternativeTitle[];
}