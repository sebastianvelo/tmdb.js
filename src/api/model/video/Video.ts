import { Language } from "../CommonModels";

export interface Video extends Language {
    iso_3166_1?: string;
    name?: string;
    key?: string;
    published_at?: string;
    site?: string;
    size?: number;
    type?: string;
    official?: boolean;
}