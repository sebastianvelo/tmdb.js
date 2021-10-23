import { WithId } from "../../../common/model/CommonModels";
import { Logo } from "../../../common/model/logo/Logo";

export interface CompanyDetails extends WithId {
  description?: string;
  headquarters?: string;
  homepage?: string;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};

interface CompanyAlternativeName {
  name?: string;
  type?: string;
};
export interface CompanyAlternativeNames extends WithId {
  results: CompanyAlternativeName[];
};

export interface CompanyImages extends WithId {
  logos: Logo[];
};
