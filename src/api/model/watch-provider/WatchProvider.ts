export interface WatchProvider {
    display_priority?: number;
    logo_path?: string;
    provider_name?: string;
    provider_id?: number;
}

export interface Region {
    iso_3166_1?: string;
    english_name?: string;
    native_name?: string;
}