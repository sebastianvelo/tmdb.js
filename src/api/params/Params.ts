import { SortBy } from "./types/ParamsTypes";

export interface LanguageParams {
  language?: string;
}
export interface PageParams {
  page?: number;
}
export interface RegionParams {
  region?: string;
}

export interface SortParams {
  sort_by?: SortBy;
}
