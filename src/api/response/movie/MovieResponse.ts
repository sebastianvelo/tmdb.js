import { Movie } from "../../model/film/Film";
import { FilmDetailsResponse } from "../film/FilmResponse";

export interface MovieDetailsResponse extends FilmDetailsResponse, Movie {};