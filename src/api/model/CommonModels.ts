export interface TMDBEntityModel {
  id?: number;
}
export interface Language {
  iso_639_1?: string;
}
export interface Translation<T> extends Language {
  iso_3166_1?: string;
  name?: string;
  english_name?: string;
  data: T;
}
