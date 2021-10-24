import { ListResponse } from "../../../common/response/CommonResponse";
import {
  Region,
  WatchProvider
} from "../../../model/watch-provider/WatchProvider";

export type FilmWatchProvidersResponse = ListResponse<WatchProvider>;
export type RegionsWatchProvidersResponse = ListResponse<Region>;
