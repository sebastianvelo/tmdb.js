
const Endpoints = {
  GET_DETAILS: (id: number) => `/${id}/`,
  GET_CHANGES: (id: number) => `/${id}/changes/`,
  GET_MOVIE_CREDITS: (id: number) => `/${id}/movie_credits/`,
  GET_TV_CREDITS: (id: number) => `/${id}/tv_credits/`,
  GET_COMBINED_CREDITS: (id: number) => `/${id}/combined_credits/`,
  GET_EXTERNAL_IDS: (id: number) => `/${id}/external_ids/`,
  GET_IMAGES: (id: number) => `/${id}/images/`,
  GET_TAGGED_IMAGES: (id: number) => `/${id}/tagged_images/`,
  GET_TRANSLATIONS: (id: number) => `/${id}/translations/`,
  GET_LATEST: () => `/latest/`,
  GET_POPULAR: () => `/popular/`,
};

export default Endpoints;
