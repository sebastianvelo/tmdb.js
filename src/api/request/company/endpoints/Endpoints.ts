const Endpoints = {
  GET_DETAILS: (id: number) => `/${id}/`,
  GET_ALTERNATIVE_NAMES: (id: number) => `/${id}/alternative_names/`,
  GET_IMAGES: (id: number) => `/${id}/images/`
};

export default Endpoints;
