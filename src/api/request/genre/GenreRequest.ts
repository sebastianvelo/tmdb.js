import Resource from "../../resource/Resource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GenreParams } from "./params/params";
import { GenresResponse } from "./response/Response";

class GenreRequest extends TMDBRequest {
  protected resource = Resource.GENRE;

  protected endpoints = Endpoints;

  public getTVGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.getTVGenres(), query);

  public getMovieGenres = (query?: GenreParams) =>
    this.get<GenresResponse>(this.endpoints.getMovieGenres(), query);
}

export default GenreRequest;
