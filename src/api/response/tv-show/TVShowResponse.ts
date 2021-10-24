import { TranslationsResponse } from "../../model/CommonModels";
import { TVShow } from "../../model/film/Film";
import { FilmDetailsResponse } from "../film/FilmResponse";

export interface TVShowDetailsResponse extends FilmDetailsResponse, TVShow {}

export type TVShowTranslationsResponse = TranslationsResponse<{
    name?: string;
    overview?: string;
    homepage?: string;
}>;