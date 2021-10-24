import { ListResponse, TranslationsResponse } from "../../model/CommonModels";
import { Movie } from "../../model/film/Film";
import { ReleaseDate } from "../../model/movie/Movie";
import { FilmDetailsResponse } from "../film/FilmResponse";

export interface MovieDetailsResponse extends FilmDetailsResponse, Movie {};

export type MovieTranslationsResponse = TranslationsResponse<{
    title?: string;
    overview?: string;
    homepage?: string;
}>;

export type MovieReleaseDatesResponse = ListResponse<ReleaseDate>;