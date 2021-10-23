import { WithId } from "../CommonModels";

export interface Genre extends WithId {
  name?: string;
};

export interface Genres {
  genres?: Genre[];
};
