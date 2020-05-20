import React from "react";
import MediaObjects from "./../../media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "../../../models/MediaObject";
import { nanoid } from "nanoid";
import useResponsive from "../../../effects/useResponsive";
import { ProductionCompany } from "../../../models/ProductionCompany";
import { ProductionWrapper } from "./details-production.styles.";

export interface ProductionDetailsModel {
  items: ProductionCompany[];
}

const ProductionDetails: React.FunctionComponent<ProductionDetailsModel> = ({
  items,
}) => {
  const { isBigScreen } = useResponsive();
  const objects: MediaObject[] = items.map(({ name, logo_path }) => ({
    name,
    path: logo_path,
    thumbnailSize: ThumbnailSize.small,
    id: nanoid(),
  }));
  return (
    <ProductionWrapper>
      <MediaObjects
        items={objects}
        noTitle
        noBackground
        height={isBigScreen ? 200 : 100}
        itemSize={isBigScreen ? 250 : 100}
        id="production-media"
        thumbnailSize={ThumbnailSize.small}
      />
    </ProductionWrapper>
  );
};

export default ProductionDetails;
