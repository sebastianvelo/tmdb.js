const Endpoints = {
  GET_NOW_PLAYING: () => `/now_playing`,
  GET_UPCOMING: () => `/upcoming`,
  GET_RELEASE_DATES: (id: number) => `/${id}/release_dates/`,
  GET_LISTS: (id: number) => `/${id}/lists/`,
};

export default Endpoints;
