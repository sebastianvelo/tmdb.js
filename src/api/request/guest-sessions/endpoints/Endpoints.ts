const Endpoints = {
  MOVIES: (guest_session_id: string) => `/${guest_session_id}/rated/movies/`,
  TV_SHOWS: (guest_session_id: string) => `/${guest_session_id}/rated/tv/`,
  EPISODES: (guest_session_id: string) => `/${guest_session_id}/rated/tv/episodes/`,
};

export default Endpoints;
