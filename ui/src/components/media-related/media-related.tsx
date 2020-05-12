import React from "react";
import Movie from "../../models/Movie";
import {
  MediaRelatedWrapper,
  RelatedMediaObjects,
} from "./media-related.styles";
import MediaObjects from "../media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";

const RelatedMedia: React.FunctionComponent<{
  id: number;
  items: MediaObject[];
}> = ({ items, id }) => {
  return (
    <MediaRelatedWrapper>
      <RelatedMediaObjects>
        <MediaObjects
          items={items}
          id={id}
          height={400}
          itemSize={250}  
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
