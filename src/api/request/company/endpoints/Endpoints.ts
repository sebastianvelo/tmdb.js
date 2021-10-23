const Endpoints = {
  GET_DETAILS: (id: string) => `/${id}/`,
  GET_ALTERNATIVE_NAMES: (id: string) => `/${id}/alternative_names/`,
  GET_IMAGES: (id: string) => `/${id}/images/`,
};

export default Endpoints;
