import axios, { AxiosRequestConfig, Method } from "axios";
import EndpointConfig from "./endpoint/EndpointConfig";
import QueryParams from "./params/QueryParams";

abstract class APIRequest {
  protected abstract readonly baseURL: string;

  protected abstract readonly resource: string;

  protected abstract readonly headers: Record<string, string>;

  protected abstract readonly endpoints: EndpointConfig;

  protected readonly version: string;

  constructor(version: string) {
    this.version = version;
  }

  protected async req<T>(
    method: Method,
    url: string,
    query?: QueryParams
  ): Promise<T> {
    const response = await axios.request<T>(
      this.getRequestConfig(method, url, query)
    );
    return response.data;
  }

  protected get<T>(url: string, query?: QueryParams): Promise<T> {
    return this.req("GET", url, query);
  }

  protected post<T>(url: string, query?: QueryParams): Promise<T> {
    return this.req("POST", url, query);
  }

  private getRequestConfig(
    method: Method,
    url: string,
    query?: QueryParams
  ): AxiosRequestConfig {
    return {
      method,
      params: query,
      headers: this.headers,
      url: this.getEndpoint(url)
    };
  }

  private getEndpoint(url: string): string {
    return `${this.getURL()}${url}`;
  }

  private getURL(): string {
    return `${this.baseURL}${this.version}${this.resource}`;
  }
}

export default APIRequest;
