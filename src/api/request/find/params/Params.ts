import { LanguageParams } from "../../../common/params/CommonParams";
import { ExternalSource } from "../../../common/params/types/ParamsTypes";

export interface FindParams extends LanguageParams {
  external_source: ExternalSource;
}
