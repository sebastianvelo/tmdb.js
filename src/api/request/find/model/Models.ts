import {
  Episodes, Movie, Person, TVShow,
} from '../../../common/model/CommonModels';

export type FindResult = {
  movie_results: Movie[];
  tv_results: TVShow[];
  person_results: Person[];
  tv_episode_results: Episodes[];
  tv_season_results: object[]; // TODO Review this
};
