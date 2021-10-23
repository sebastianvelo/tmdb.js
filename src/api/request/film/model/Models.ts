import { WithId } from "../../../common/model/CommonModels";
import { ProductionCompany, ProductionCountry, SpokenLanguage, MovieStatus, AlternativeTitle } from "../../../common/model/film/Film";
import Genre from "../../genre/Genre";

export interface FilmDetail {
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

export interface AlternativeTitles extends WithId {
  titles?: AlternativeTitle[];
}