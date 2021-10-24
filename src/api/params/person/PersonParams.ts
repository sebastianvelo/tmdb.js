import { LanguageParams, PageParams } from "../Params";

export interface ExternalIdParams extends LanguageParams {}
export interface TaggedImagesParams extends LanguageParams, PageParams {}
export interface TranslationsParams extends LanguageParams {}
export interface LatestParams extends LanguageParams {}
export interface PopularParams extends LanguageParams {}