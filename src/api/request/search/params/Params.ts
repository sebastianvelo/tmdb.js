import { LanguageParams } from "../../../common/params/CommonParams";

export interface SearchParams extends LanguageParams {
    query: string;
    page?: number;
}
export interface SearchMediaParams extends SearchParams {
    include_adult?: boolean;
    region?: string;
    year?: number;
    primary_release_year?: number;
}