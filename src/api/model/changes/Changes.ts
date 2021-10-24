import { TMDBEntity } from "../CommonModels";

interface ChangeItem extends TMDBEntity {
    action?: string;
    time?: string;
    value?: {
        episode_id?: number;
        episode_number?: number;
    };
    iso_639_1?: string;
    original_value?: string;
}

export interface Change {
    key?: string;
    items?: ChangeItem[];
}