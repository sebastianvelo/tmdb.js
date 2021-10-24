import { Language } from "../CommonModels";

export interface ReleaseDateItem extends Language {
    certification?: string;
    release_date?: string;
    type?: number;
    note?: string;
}
export interface ReleaseDate {
    iso_3166_1?: string;
    release_dates?: ReleaseDateItem[]
}