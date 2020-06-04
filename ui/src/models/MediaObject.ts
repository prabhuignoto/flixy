export interface MediaObject {
  name?: string;
  path?: string;
  id: number | string;
  visible?: boolean;
  thumbnailSize?: ThumbnailSize;
  noTitle?: boolean;
  noLabel?: boolean;
  release_date?: string;
  overview?: string;
  vote_average?: number;
  hideObjectWithNoImage? : boolean;
  onSelect?: (m: MediaObject) => void;
  info?: string
}

export enum ThumbnailSize {
  small = "SMALL",
  large = "LARGE"
};
