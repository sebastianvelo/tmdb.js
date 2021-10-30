import { TMDBEntityModel } from "../../../model/CommonModels";
import { Company, CompanyAlternativeName } from "../../../model/company/Company";
import { Image } from "../../../model/image/Image";

export interface CompanyResponse extends Company {
  description?: string;
  headquarters?: string;
  homepage?: string;
  origin_country?: string;
};

export interface CompanyAlternativeNamesResponse extends TMDBEntityModel {
  results: CompanyAlternativeName[];
};

export interface CompanyImagesResponse extends TMDBEntityModel {
  logos: Image[];
};
