import React from "react";
import {
  MediaRelatedWrapper,
  RelatedMediaObjects,
  RelatedMediaHeader,
} from "./media-related.styles";
import MediaObjects from "../media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import useResponsive from "../../effects/useResponsive";

const RelatedMedia: React.FunctionComponent<{
  id: number | string;
  items: MediaObject[];
  title?: string;
}> = ({ items, id, title }) => {
  const { isBigScreen } = useResponsive();
  return (
    <MediaRelatedWrapper>
      <RelatedMediaHeader>{title}</RelatedMediaHeader>
      <RelatedMediaObjects>
        <MediaObjects
          items={items}
          id={id}
          height={isBigScreen ? 400 : 320}
          itemSize={isBigScreen ? 250 : 200}
          thumbnailSize={ThumbnailSize.large}
          useExtendedCard
          showExpand
        />
      </RelatedMediaObjects>
    </MediaRelatedWrapper>
  );
};

export default RelatedMedia;
