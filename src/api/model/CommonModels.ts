export interface TMDBEntity {
  id?: number;
}

export interface Language {
  iso_639_1?: string;
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

interface Translation<T> extends Language {
  iso_3166_1?: string;
  name?: string;
  english_name?: string;
  data: T;
}

export interface TranslationsResponse<T> extends TMDBEntity {
  translations?: Translation<T>[];
}
