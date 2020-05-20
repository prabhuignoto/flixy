import React from "react";
import MediaObjects from "./../../media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "../../../models/MediaObject";
import { nanoid } from "nanoid";
import useResponsive from "../../../effects/useResponsive";

export interface ProductionDetailsModel {
  items: { name: string; logoPath: string }[];
}

const ProductionDetails: React.FunctionComponent<ProductionDetailsModel> = ({
  items,
}) => {
  const { isBigScreen } = useResponsive();
  const objects: MediaObject[] = items.map(({ name, logoPath }) => ({
    name,
    path: logoPath,
    thumbnailSize: ThumbnailSize.small,
    id: nanoid(),
  }));
  return (
    <MediaObjects
      items={objects}
      noTitle
      noBackground
      height={isBigScreen ? 300 : 200}
      itemSize={isBigScreen ? 200 : 150}
      id="production-media"
      thumbnailSize={ThumbnailSize.small}
    />
  );
};

export default ProductionDetails;
