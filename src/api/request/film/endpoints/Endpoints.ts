const Endpoints = {
  getDetails: (id: number) => `/${id}`,
  getAlternativeTitles: (id: number) => `/${id}/alternative_titles`,
  getChanges: (id: number) => `/${id}/changes`,
  getCredits: (id: number) => `/${id}/credits`,
  getExternalIDs: (id: number) => `/${id}/external_ids`,
  getImages: (id: number) => `/${id}/images`,
  getKeywords: (id: number) => `/${id}/keywords`,
  getRecommendations: (id: number) => `/${id}/recommendations`,
  getReviews: (id: number) => `/${id}/reviews`,
  getSimilar: (id: number) => `/${id}/similar`,
  getTranslations: (id: number) => `/${id}/translations`,
  getVideos: (id: number) => `/${id}/videos`,
  getWatchProviders: (id: number) => `/${id}/watch/providers`,
  getLatest: () => `/latest`,
  getPopular: () => `/popular`,
  getTopRated: () => `/top_rated`,
};

export default Endpoints;
