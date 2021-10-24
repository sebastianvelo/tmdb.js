import { TMDBEntity } from "../../model/CommonModels";

interface AuthorDetails {

    name?: string;
    username?: string;
    avatar_path?: string;
    rating?: string;
}

export interface ReviewDetailsResponse extends TMDBEntity {
    author?: string;
    author_details?: AuthorDetails;
    content?: string;
    created_at?: string;
    iso_639_1?: string;
    media_id?: number;
    media_title?: string;
    media_type?: string;
    updated_at?: string;
    url?: string;
}