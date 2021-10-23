type SortBy = 'popularity.asc' | 'popularity.desc' | 'release_date.asc' | 'release_date.desc' | 'revenue.asc' | 'revenue.desc' | 'primary_release_date.asc' | 'primary_release_date.desc' | 'original_title.asc' | 'original_title.desc' | 'vote_average.asc' | 'vote_average.desc' | 'vote_count.asc' | 'vote_count.desc';

export interface DiscoverParams {
  language?: string;
  region?: string;
  sort_by?: SortBy;
  certification_country?: string;
  certification?: string;
  include_adult?: boolean;
  include_video?: boolean;
  page?: number;
  primary_release_year?: number;
  with_release_type?: number;
  year?: number;
  'certification.lte'?: string;
  'certification.gte'?: string;
  'primary_release_date.gte'?: string;
  'primary_release_date.lte'?: string;
  'release_date.gte'?: string;
  'release_date.lte'?: string;
  'vote_count.lte'?: number;
  'vote_count.gte'?: number;
  'vote_average.lte'?: number;
  'vote_average.gte'?: number;
  'with_runtime.lte'?: number;
  'with_runtime.gte'?: number;
  with_cast?: string;
  with_crew?: string;
  with_people?: string;
  with_companies?: string;
  with_genres?: string;
  without_genres?: string;
  with_keywords?: string;
  without_keywords?: string;
  with_original_language?: string;
  with_watch_providers?: string;
  watch_region?: string;
  with_watch_monetization_types?: string;
}
