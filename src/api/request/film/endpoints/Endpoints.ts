const Endpoints = {
  GET_DETAILS: (id: number) => `/${id}`,
  GET_ALTERNATIVE_TITLES: (id: number) => `/${id}/alternative_titles`,
  GET_CHANGES: (id: number) => `/${id}/changes`,
  GET_CREDITS: (id: number) => `/${id}/credits`,
  GET_EXTERNAL_IDS: (id: number) => `/${id}/external_ids`,
  GET_IMAGES: (id: number) => `/${id}/images`,
  GET_KEYWORDS: (id: number) => `/${id}/keywords`,
  GET_RECOMMENDATIONS: (id: number) => `/${id}/recommendations`,
  GET_REVIEWS: (id: number) => `/${id}/reviews`,
  GET_SIMILAR: (id: number) => `/${id}/similar`,
  GET_TRANSLATIONS: (id: number) => `/${id}/translations`,
  GET_VIDEOS: (id: number) => `/${id}/videos`,
  GET_WATCH_PRIVDERS: (id: number) => `/${id}/watch/providers`,
  GET_LATEST: () => `/latest`,
  GET_POPULAR: () => `/popular`,
  GET_TOP_RATED: () => `/top_rated`,
};

export default Endpoints;
