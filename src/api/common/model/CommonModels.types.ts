export type PaginableResponse<T> = {
    page: number;
    results: T[];
    total_results: number;
    total_pages: number;
};

interface Film {
    id?: number;
    poster_path?: string | null;
    adult?: boolean;
    overview?: string;
    release_date?: string;
    genre_ids: number[];
    original_title?: string;
    original_language?: string;
    title?: string;
    backdrop_path?: string | null;
    popularity?: number;
    vote_count?: number;
    video?: boolean;
    vote_average?: number;
};
export interface TVShow extends Film {
    first_air_date: string;
    origin_country: string[];
    name: string;
    original_name: string;
}
export type Movie = Film;
export type Person = {
    id?: number;
    profile_path?: string | null;
    adult?: boolean;
    known_for: (Movie | TVShow)[];
}