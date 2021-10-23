import { Method } from "axios";
import APIRequest from "../../common/APIRequest";
import QueryParams from "../../common/params/QueryParams";

abstract class TMDBRequest extends APIRequest {
  protected baseURL: string = "https://api.themoviedb.org/";

  protected headers: Record<string, string> = {};

  protected apiKey: string;

  constructor(version: string, apiKey: string) {
    super(version);
    this.apiKey = apiKey;
  }

  protected async req<T>(
    method: Method,
    url: string,
    query?: QueryParams
  ): Promise<T> {
    const queryApiKey = { ...query, api_key: this.apiKey };
    return super.req(method, url, queryApiKey);
  }
}

export default TMDBRequest;
