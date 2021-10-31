const Endpoints = {
  getDetails: (id: number, season: number) =>
    `/${id}/season/${season}`,
  getAccountStates: (id: number, season: number) =>
    `/${id}/season/${season}/account_states`,
  getChanges: (id: number, season: number) =>
    `/${id}/season/${season}/changes`,
  getCredits: (id: number, season: number) =>
    `/${id}/season/${season}/credits`,
  getExternalIDs: (id: number, season: number) =>
    `/${id}/season/${season}/external_ids`,
  getImages: (id: number, season: number) =>
    `/${id}/season/${season}/images`,
  getTranslations: (id: number, season: number) =>
    `/${id}/season/${season}/translations`,
  getVideos: (id: number, season: number) =>
    `/${id}/season/${season}/videos`
};

export default Endpoints;
