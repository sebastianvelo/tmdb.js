const Endpoints = {
  getDetails: (id: number) => `/${id}`,
  getAlternativeNames: (id: number) => `/${id}/alternative_names`,
  getImages: (id: number) => `/${id}/images`
};

export default Endpoints;
