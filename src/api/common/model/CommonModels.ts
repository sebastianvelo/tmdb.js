export interface WithId {
  id?: number;
}

export type PaginableResponse<T> = {
  page: number;
  results: T[];
  total_results: number;
  total_pages: number;
};