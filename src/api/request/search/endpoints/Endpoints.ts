import { TimeWindow } from "../../../model/trending/Trending";

const Endpoints = {
  getAll: (timeWindow: TimeWindow) => `/all/${timeWindow}`,
  getMovies: (timeWindow: TimeWindow) => `/movie/${timeWindow}`,
  getTVShows: (timeWindow: TimeWindow) => `/tv/${timeWindow}`,
  getPeople: (timeWindow: TimeWindow) => `/person/${timeWindow}`
};

export default Endpoints;
