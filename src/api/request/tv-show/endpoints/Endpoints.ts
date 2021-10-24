import FilmEndpoints from "../../film/endpoints/Endpoints";

const Endpoints = {
    ...FilmEndpoints,
    getAccountStates: (id: number) => `/${id}/account_states`,
    getAggregateCredits: (id: number) => `/${id}/aggregate_credits`,
    getContentRatings: (id: number) => `/${id}/content_ratings`,
    getEpisodeGroups: (id: number) => `/${id}/episode_groups`,
    getScreenedTheatrically: (id: number) => `/${id}/screened_theatrically`,
    getAiringToday: () => `/airing_today`,
    getOnTheAir: () => `/on_the_air`,
};

export default Endpoints;
