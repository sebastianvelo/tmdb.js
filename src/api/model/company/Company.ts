import { TMDBEntity } from "../CommonModels";

export interface Company extends TMDBEntity {
  logo_path?: string;
  name?: string;
}

export type ProductionCountry = {
  iso_3166_1?: string;
  name?: string;
};

export interface ProductionCompany extends Company {
  origin_country: string;
}
export interface CompanyAlternativeName {
  name?: string;
  type?: string;
};