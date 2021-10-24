const Endpoints = {
  GET_DETAILS: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/`,
  GET_ACCOUNT_STATES: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/account_states/`,
  GET_CHANGES: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/changes/`,
  GET_CREDITS: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/credits/`,
  GET_EXTERNAL_IDS: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/external_ids/`,
  GET_IMAGES: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/images/`,
  GET_TRANSLATIONS: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/translations/`,
  GET_VIDEOS: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/videos/`
};

export default Endpoints;
