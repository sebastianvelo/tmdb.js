import { LanguageParams, PageParams } from "../Params";

export interface ChangesParams extends PageParams {
  start_date?: string;
  end_date?: string;
}

export interface DetailParams extends LanguageParams {
  append_to_response?: string;
}

export interface CreditsParams extends LanguageParams {}