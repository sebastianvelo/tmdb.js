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
export interface WatchRegionParams {
  watch_region?: string;
}
export interface SortParams {
  sort_by?: SortBy;
}

export interface ChangesParams extends PageParams {
  start_date?: string;
  end_date?: string;
}

export interface DetailParams extends LanguageParams {
  append_to_response?: string;
}

export interface CreditsParams extends LanguageParams {}

export interface AccountStatesParams {
  guest_session_id?: string;
  session_id?: string;
}
