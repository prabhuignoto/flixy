export interface MediaObject {
  name: string;
  path: string;
  id: number;
  visible?: boolean;
  thumbnailSize?: ThumbnailSize;
}

export enum ThumbnailSize {
  small = "SMALL",
  large = "LARGE"
};
