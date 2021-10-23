import { WithId } from "../../common/model/CommonModels";
import { Company } from "../../common/model/company/Company";
import { Logo } from "../../common/model/logo/Logo";

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
export interface CompanyAlternativeNames extends WithId {
  results: CompanyAlternativeNameResponse[];
};

export interface CompanyImages extends WithId {
  logos: Logo[];
};
