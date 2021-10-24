import { TVShow } from "../../model/film/Film";
import { FilmDetailsResponse } from "../film/FilmResponse";

export interface TVShowDetailsResponse extends FilmDetailsResponse, TVShow {}
