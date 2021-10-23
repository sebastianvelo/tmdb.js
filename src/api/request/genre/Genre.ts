import { Genres } from "../../common/model/genre/Genre";
import EndpointResource from "../../common/resource/EndpointResource";
import TMDBRequest from "../TMDBRequest";
import Endpoints from "./endpoints/Endpoints";
import { GenreParams } from "./params/Params";

class Genre extends TMDBRequest {
  protected resource: string = EndpointResource.GENRE;

  protected endpoints = Endpoints;

  public getTVGenres = (params?: GenreParams) =>
    this.get<Genres>(this.endpoints.TV_SHOWS(), params);

  public getMovieGenres = (params?: GenreParams) =>
    this.get<Genres>(this.endpoints.MOVIES(), params);
}

export default Genre;
