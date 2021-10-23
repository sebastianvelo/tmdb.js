import { TimeWindow } from "../../../common/model/trending/Trending";

const Endpoints = {
  GET_ALL: (timeWindow: TimeWindow) => `/all/${timeWindow}`,
  GET_MOVIES: (timeWindow: TimeWindow) => `/movie/${timeWindow}`,
  GET_TVSHOWS: (timeWindow: TimeWindow) => `/tv/${timeWindow}`,
  GET_PEOPLE: (timeWindow: TimeWindow) => `/person/${timeWindow}`
};

export default Endpoints;
