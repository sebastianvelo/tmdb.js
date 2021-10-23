import { LanguageParams } from "../Params";
import { ExternalSource } from "../types/ParamsTypes";

export interface FindParams extends LanguageParams {
  external_source: ExternalSource;
}
