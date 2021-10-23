import { PaginableResponse, Movie, TVShow } from "../../../common/model/CommonModels.types"

export type Movies = PaginableResponse<Movie>
export type TVShows = PaginableResponse<TVShow>