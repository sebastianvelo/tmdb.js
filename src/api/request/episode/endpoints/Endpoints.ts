const Endpoints = {
    GET_SEASON: (id: number, season: number) => `/${id}/season/${season}/`,
    GET_EPISODE: (id: number, season: number, episode: number) => `/${id}/season/${season}/episode/${episode}`,
};

export default Endpoints;
