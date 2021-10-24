import FilmEndpoints from "../../film/endpoints/Endpoints";

const Endpoints = {
  ...FilmEndpoints,
  getNowPlaying: () => `/now_playing`,
  getUpcoming: () => `/upcoming`,
  getReleaseDates: (id: number) => `/${id}/release_dates`,
  getLists: (id: number) => `/${id}/lists`,
};

export default Endpoints;
