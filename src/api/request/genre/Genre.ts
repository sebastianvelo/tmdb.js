import EndpointResource from "../../common/resource/EndpointResource";
import { GenresResponse } from "../../response/common/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GenreParams } from "./params/Params";

class Genre extends TMDBRequest {
  protected resource: string = EndpointResource.GENRE;

  protected endpoints = Endpoints;

  public getTVGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.TV_SHOWS(), query);

  public getMovieGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.MOVIES(), query);
}

export default Genre;
