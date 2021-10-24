type FileType = ".svg" | ".png";
export interface Image {
  id?: string;
  file_type?: FileType;
  file_path?: string;
  width?: number;
  height?: number;
  aspect_ratio?: number;
  vote_average?: number;
  vote_count?: number;
};
