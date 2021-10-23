import { Movie } from "../../model/film/Film";
import { FilmDetailResponse } from "../film/FilmResponse";

export interface MovieDetailResponse extends FilmDetailResponse, Movie {};