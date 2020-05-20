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
  id: number;
  items: MediaObject[];
  title: string;
}> = ({ items, id, title }) => {
  const { isBigScreen } = useResponsive();
  return (
    <MediaRelatedWrapper>
      <RelatedMediaHeader>{title}</RelatedMediaHeader>
      <RelatedMediaObjects>
        <MediaObjects
          items={items}
          id={id}
          height={isBigScreen ? 450 : 320}
          itemSize={isBigScreen ? 300 : 200}
          thumbnailSize={ThumbnailSize.large}
          noBackground
        />
      </RelatedMediaObjects>
    </MediaRelatedWrapper>
  );
};

export default RelatedMedia;
