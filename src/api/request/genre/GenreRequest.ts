import EndpointResource from "../../resource/EndpointResource";
import { GenresResponse } from "../../common/response/CommonResponse";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GenreParams } from "./params/params";

class GenreRequest extends TMDBRequest {
  protected resource = EndpointResource.GENRE;

  protected endpoints = Endpoints;

  public getTVGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.TV_SHOWS(), query);

  public getMovieGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.MOVIES(), query);
}

export default GenreRequest;
