import { TMDBEntity } from "../CommonModels";

export interface Season extends TMDBEntity {
    air_date: string;
    poster_path: string;
    season_number: number;
  }