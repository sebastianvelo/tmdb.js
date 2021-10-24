import { Language } from "../../model/CommonModels";
import { AuthorDetails } from "../../model/review/Review";

export interface ReviewDetailsResponse extends Language {
  author?: string;
  author_details?: AuthorDetails;
  content?: string;
  created_at?: string;
  media_id?: number;
  media_title?: string;
  media_type?: string;
  updated_at?: string;
  url?: string;
}
