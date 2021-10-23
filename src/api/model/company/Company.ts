import { WithId } from "../CommonModels";

export interface Company extends WithId {
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
