import { TMDBEntity } from "../CommonModels";

export interface Person extends TMDBEntity {
  name?: string;
}
export interface Season {
  air_date: string;
  poster_path: string;
  season_number: number;
}
export interface Media extends TMDBEntity {
  name: string;
  original_name: string;
  character: string;
  episodes: any[];
  seasons: Season[];
}
