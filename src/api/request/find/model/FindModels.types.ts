import { Movie, Person, TVShow } from "../../../common/model/CommonModels.types";

export type FindResult = {
    movie_results: Movie[];
    tv_results: TVShow[];
    person_results: Person[];
    tv_episode_results: object[];
    tv_season_results: object[]; //TODO Review this
}