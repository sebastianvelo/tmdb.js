import { Genre, Movie } from '../../../common/model/CommonModels';

type ProductionCompany = {
  id?: number;
  name?: string;
  logo_path?: string | null;
  origin_country: string;
};

type ProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};

type SpokenLanguage = {
  iso_639_1?: string;
  name?: string;
};

type MovieStatus = 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled';

export interface MovieDetail extends Movie {
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
}
