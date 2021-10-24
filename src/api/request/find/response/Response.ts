import { Episode } from "../../../model/episode/Episode";
import { Movie, TVShow } from "../../../model/film/Film";
import { Person } from "../../../model/person/Person";
import { Season } from "../../../model/season/Season";

export type FindResponse = {
  movie_results: Movie[];
  tv_results: TVShow[];
  person_results: Person[];
  tv_episode_results: Episode[];
  tv_season_results: Season[]; // TODO Review this
};
