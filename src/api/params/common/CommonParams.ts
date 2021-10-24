import { LanguageParams, PageParams } from "../Params";

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
