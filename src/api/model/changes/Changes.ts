import { Language } from "../CommonModels";

interface ChangeItem extends Language {
    action?: string;
    time?: string;
    value?: {
        episode_id?: number;
        episode_number?: number;
    };
    original_value?: string;
}

export interface Change {
    key?: string;
    items?: ChangeItem[];
}