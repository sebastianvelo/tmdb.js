import { Method } from 'axios';
import APIRequest from '../../common/APIRequest';
import QueryParams from '../../common/params/QueryParams';

abstract class TMDBRequest extends APIRequest {
  protected baseURL: string = 'https://api.themoviedb.org/';

  protected headers: Record<string, string> = {};

  protected apiKey: string;

  constructor(version: string, apiKey: string) {
    super(version);
    this.apiKey = apiKey;
  }

  protected async req<T>(method: Method, url: string, params?: QueryParams): Promise<T> {
    const paramsWithApiKey = { ...params, api_key: this.apiKey };
    return super.req(method, url, paramsWithApiKey);
  }
}

export default TMDBRequest;
