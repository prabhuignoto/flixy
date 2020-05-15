import React from "react";
import Movie from "../../models/Movie";
import {
  MediaRelatedWrapper,
  RelatedMediaObjects,
} from "./media-related.styles";
import MediaObjects from "../media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import useResponsive from "../../effects/useResponsive";

const RelatedMedia: React.FunctionComponent<{
  id: number;
  items: MediaObject[];
}> = ({ items, id }) => {
  const { isBigScreen } = useResponsive();
  return (
    <MediaRelatedWrapper>
      <RelatedMediaObjects>
        <MediaObjects
          items={items}
          id={id}
          height={isBigScreen ? 400 : 320}
          itemSize={isBigScreen ? 250 : 200}
          thumbnailSize={ThumbnailSize.large}
        />
      </RelatedMediaObjects>
      {/* <RelatedMovieInfo>
        <DetailsTitle />
      </RelatedMovieInfo> */}
    </MediaRelatedWrapper>
  );
};

export default RelatedMedia;
