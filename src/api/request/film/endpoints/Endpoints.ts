const Endpoints = {
  GET_DETAILS: (id: string) => `/${id}/`,
  GET_ALTERNATIVE_TITLES: (id: string) => `/${id}/alternative_titles/`,
  GET_CHANGES: (id: string) => `/${id}/changes/`,
  GET_CREDITS: (id: string) => `/${id}/credits/`,
  GET_EXTERNAL_IDS: (id: string) => `/${id}/external_ids/`,
  GET_IMAGES: (id: string) => `/${id}/images/`,
  GET_KEYWORDS: (id: string) => `/${id}/keywords/`,
  GET_LISTS: (id: string) => `/${id}/lists/`,
  GET_RECOMMENDATIONS: (id: string) => `/${id}/recommendations/`,
  GET_RELEASE_DATES: (id: string) => `/${id}/release_dates/`,
  GET_REVIEWS: (id: string) => `/${id}/reviews/`,
  GET_SIMILAR: (id: string) => `/${id}/similar/`,
  GET_TRANSLATIONS: (id: string) => `/${id}/translations/`,
  GET_VIDEOS: (id: string) => `/${id}/videos/`,
  GET_WATCH_PRIVDERS: (id: string) => `/${id}/watch/providers/`,
  GET_LATEST: () => `/latest`,
  GET_POPULAR: () => `/popular`,
  GET_TOP_RATED: () => `/top_rated`,
};

export default Endpoints;
