import { TranslationsResponse, ListResponse } from "../../../common/response/CommonResponse";
import { Movie } from "../../../model/film/Film";
import { ReleaseDate } from "../../../model/movie/Movie";
import { FilmResponse } from "../../film/response/Response";

export interface MovieResponse extends FilmResponse, Movie {};

export type MovieTranslationsResponse = TranslationsResponse<{
    title?: string;
    overview?: string;
    homepage?: string;
}>;

export type MovieReleaseDatesResponse = ListResponse<ReleaseDate>;