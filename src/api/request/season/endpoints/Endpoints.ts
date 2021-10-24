const Endpoints = {
  GET_DETAILS: (id: number, season: number) =>
    `/${id}/season/${season}`,
  GET_ACCOUNT_STATES: (id: number, season: number) =>
    `/${id}/season/${season}/account_states`,
  GET_CHANGES: (id: number, season: number) =>
    `/${id}/season/${season}/changes`,
  GET_CREDITS: (id: number, season: number) =>
    `/${id}/season/${season}/credits`,
  GET_EXTERNAL_IDS: (id: number, season: number) =>
    `/${id}/season/${season}/external_ids`,
  GET_IMAGES: (id: number, season: number) =>
    `/${id}/season/${season}/images`,
  GET_TRANSLATIONS: (id: number, season: number) =>
    `/${id}/season/${season}/translations`,
  GET_VIDEOS: (id: number, season: number) =>
    `/${id}/season/${season}/videos/`
};

export default Endpoints;
