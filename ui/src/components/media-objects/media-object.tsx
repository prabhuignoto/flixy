import React from "react";
import {
  MediaObject,
  ObjectImage,
  FallbackImage,
  ObjectName,
} from "./media-object.style";
import { useSpring, config } from "react-spring";
import {
  MediaObject as MediaObjectModel,
  ThumbnailSize,
} from "../../models/MediaObject";
import Loader, { LoaderSize } from "../media-loader";

import { UserIcon } from "./../icons/index";

const MediaObjectView: React.FunctionComponent<MediaObjectModel> = React.memo(
  ({ path, name, thumbnailSize, noTitle }) => {
    const props = useSpring({
      opacity: 1,
      from: {
        opacity: 0,
      },
      delay: 0,
      config: config.stiff,
    });
    const [loaded, setLoaded] = React.useState(false);
    return (
      <MediaObject>
        {path ? (
          <>
            <ObjectImage
              src={`https://image.tmdb.org/t/p/${
                thumbnailSize === ThumbnailSize.large ? "w500" : "w200"
              }/${path}`}
              onLoad={() => setLoaded(true)}
              loaded={loaded}
              style={props}
              noTitle={noTitle}
            ></ObjectImage>
            {!loaded && <Loader size={LoaderSize.small} />}
          </>
        ) : (
          <FallbackImage>
            <UserIcon color="#4b4848" />
          </FallbackImage>
        )}
        {!noTitle && <ObjectName>{name}</ObjectName>}
      </MediaObject>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjectView;
