const Endpoints = {
  movies: (guest_session_id: string) => `/${guest_session_id}/rated/movies`,
  tvShows: (guest_session_id: string) => `/${guest_session_id}/rated/tv`,
  episodes: (guest_session_id: string) =>
    `/${guest_session_id}/rated/tv/episodes`
};

export default Endpoints;
