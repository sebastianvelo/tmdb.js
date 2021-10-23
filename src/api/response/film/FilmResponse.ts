import { WithId } from "../../common/model/CommonModels";
import { ProductionCompany, ProductionCountry } from "../../common/model/company/Company";
import { SpokenLanguage, MovieStatus, AlternativeTitle } from "../../common/model/film/Film";
import Genre from "../../request/genre/Genre";

export interface FilmDetailResponse {
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

export interface FilmAlternativeTitlesResponse extends WithId {
  titles?: AlternativeTitle[];
}