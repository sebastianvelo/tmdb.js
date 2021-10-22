export type CreditDetails = {
    id?: number;
    credit_type: string;
    department?: string;
    job?: string;
    media: {
        id?: number;
        name: string;
        original_name: string;
        character: string;
        episodes: [];
        seasons: {
            air_date: string;
            poster_path: string;
            season_number: number;
        }
    };
    media_type: string;
    person: {
        name: string;
        id: number;
    };
};