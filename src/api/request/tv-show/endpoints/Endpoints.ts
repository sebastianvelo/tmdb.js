import FilmEndpoints from "../../film/endpoints/Endpoints";

const Endpoints = {
    ...FilmEndpoints,
    GET_ACCOUNT_STATES: (id: number) => `/${id}/account_states`,
    GET_AGGREGATE_CREDITS: (id: number) => `/${id}/aggregate_credits`,
    GET_CONTENT_RATINGS: (id: number) => `/${id}/content_ratings`,
    GET_EPISODE_GROUPS: (id: number) => `/${id}/episode_groups`,
    GET_SCREENED_THEATRICALLY: (id: number) => `/${id}/screened_theatrically`,
    GET_AIRING_TODAY: () => `/airing_today`,
    GET_ON_THE_AIR: () => `/on_the_air`,
};

export default Endpoints;
