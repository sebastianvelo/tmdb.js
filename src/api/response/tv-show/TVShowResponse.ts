import { TVShow } from "../../model/film/Film";
import { FilmDetailResponse } from "../film/FilmResponse";

export interface TVShowDetailResponse extends FilmDetailResponse, TVShow {}
