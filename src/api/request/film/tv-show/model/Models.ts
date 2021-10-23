import { TVShows } from "../../../../common/model/film/Film";
import { FilmDetail } from "../../model/Models";

export interface TVShowDetail extends FilmDetail, TVShows {}
