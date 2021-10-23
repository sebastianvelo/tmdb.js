import { Episode, Movie, TVShow } from "../../common/model/film/Film";
import { Person } from "../../common/model/person/Person";

export type FindResponse = {
  movie_results: Movie[];
  tv_results: TVShow[];
  person_results: Person[];
  tv_episode_results: Episode[];
  tv_season_results: object[]; // TODO Review this
};
