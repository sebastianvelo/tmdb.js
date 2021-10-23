export type CompanyDetails = {
  id?: number;
  description?: string;
  headquarters?: string;
  homepage?: string;
  logo_path?: string;
  name?: string;
  origin_country?: string;
};

export type CompanyAlternativeNames = {
  id?: number;
  results: {
    name?: string;
    type?: string;
  }[];
};

export type CompanyImages = {
  id?: number;
  logos: {
    id?: string;
    file_type?: '.svg' | '.png';
    file_path?: string;
    width?: number;
    height?: number;
    aspect_ratio?: number;
    vote_average?: number;
    vote_count?: number;
  }[];
};
