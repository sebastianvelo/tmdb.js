import { TranslationsResponse } from "../../../common/response/CommonResponse";
import { TVShow } from "../../../model/film/Film";
import { FilmDetailsResponse } from "../../film/response/Response";

export interface TVShowDetailsResponse extends FilmDetailsResponse, TVShow {}

export type TVShowTranslationsResponse = TranslationsResponse<{
    name?: string;
    overview?: string;
    homepage?: string;
}>;