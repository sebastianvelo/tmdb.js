
const Endpoints = {
  getDetails: (id: number) => `/${id}`,
  getChanges: (id: number) => `/${id}/changes`,
  getMovieCredits: (id: number) => `/${id}/movie_credits`,
  getTVCredits: (id: number) => `/${id}/tv_credits`,
  getCombinedCredits: (id: number) => `/${id}/combined_credits`,
  getExternalIDs: (id: number) => `/${id}/external_ids`,
  getImages: (id: number) => `/${id}/images`,
  getTaggedImages: (id: number) => `/${id}/tagged_images`,
  getTranslations: (id: number) => `/${id}/translations`,
  getLatest: () => `/latest`,
  getPopular: () => `/popular`,
};

export default Endpoints;
