import { TMDBEntity } from "../../model/CommonModels";
import { Company } from "../../model/company/Company";
import { Logo } from "../../model/logo/Logo";

export interface CompanyDetailsResponse extends Company {
  description?: string;
  headquarters?: string;
  homepage?: string;
  origin_country?: string;
};

interface CompanyAlternativeNameResponse {
  name?: string;
  type?: string;
};
export interface CompanyAlternativeNames extends TMDBEntity {
  results: CompanyAlternativeNameResponse[];
};

export interface CompanyImagesResponse extends TMDBEntity {
  logos: Logo[];
};
