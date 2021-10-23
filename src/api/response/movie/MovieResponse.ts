import { Movie } from "../../../common/model/film/Film";
import { FilmDetailResponse } from "../FilmResponse";

export interface MovieDetailResponse extends FilmDetailResponse, Movie {};