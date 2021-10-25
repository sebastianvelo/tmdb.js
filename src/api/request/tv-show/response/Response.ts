import { TranslationsResponse } from "../../../common/response/CommonResponse";
import { TVShow } from "../../../model/film/Film";
import { FilmResponse } from "../../film/response/Response";

export interface TVShowResponse extends FilmResponse, TVShow {}

export type TVShowTranslationsResponse = TranslationsResponse<{
    name?: string;
    overview?: string;
    homepage?: string;
}>;