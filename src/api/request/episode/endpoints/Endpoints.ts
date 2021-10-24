const Endpoints = {
  getDetails: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}`,
  getAccountStates: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/account_states`,
  getChanges: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/changes`,
  getCredits: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/credits`,
  getExternalIDs: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/external_ids`,
  getImages: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/images`,
  getTranslations: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/translations`,
  getVideos: (id: number, season: number, episode: number) =>
    `/${id}/season/${season}/episode/${episode}/videos/`
};

export default Endpoints;
