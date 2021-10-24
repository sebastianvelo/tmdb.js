export type SortBy =
  | "popularity.asc"
  | "popularity.desc"
  | "release_date.asc"
  | "release_date.desc"
  | "revenue.asc"
  | "revenue.desc"
  | "primary_release_date.asc"
  | "primary_release_date.desc"
  | "original_title.asc"
  | "original_title.desc"
  | "vote_average.asc"
  | "vote_average.desc"
  | "vote_count.asc"
  | "vote_count.desc";

export type ExternalSource =
  | "imdb_id"
  | "freebase_mid"
  | "freebase_id"
  | "tvdb_id"
  | "tvrage_id"
  | "facebook_id"
  | "twitter_id"
  | "instagram_id";
