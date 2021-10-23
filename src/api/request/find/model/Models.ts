import { TVShow, Episodes, Movie } from "../../../common/model/film/Film";
import { Person } from "../../../common/model/person/Person";

export type FindResult = {
  movie_results: Movie[];
  tv_results: TVShow[];
  person_results: Person[];
  tv_episode_results: Episodes[];
  tv_season_results: object[]; // TODO Review this
};
