import { TMDBEntityModel } from "../CommonModels";

export interface Season extends TMDBEntityModel {
    air_date: string;
    poster_path: string;
    season_number: number;
  }