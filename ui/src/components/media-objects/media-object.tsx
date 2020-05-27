import React from "react";
import {
  MediaObject,
  ObjectImage,
  FallbackImage,
  ObjectName,
} from "./media-object.style";
import { config, useTransition } from "react-spring";
import {
  MediaObject as MediaObjectModel,
  ThumbnailSize,
} from "../../models/MediaObject";

import { UserIcon } from "./../icons/index";

const MediaObjectView: React.FunctionComponent<MediaObjectModel> = React.memo(
  ({ path, name, thumbnailSize, noTitle }) => {
    const [loadState, setLoadState] = React.useState({
      loaded: false,
      failed: false,
    });
    const imageUrl = `https://image.tmdb.org/t/p/${
      thumbnailSize === ThumbnailSize.large ? "w500" : "w200"
    }/${path}`;

    const transition = useTransition(loadState.loaded, null, {
      initial: {
        opacity: 0,
        transform: "scale(0)"
      },
      enter: {
        opacity: 1,
        transform: "scale(1)"
      },
      leave: {
        opacity: 0,
        transform: "scale(0)"
      },
      config: config.stiff,
      unique: true,
    });

    return (
      <MediaObject>
        <img
          src={imageUrl}
          onLoad={() => setLoadState({ loaded: true, failed: false })}
          onError={() => setLoadState({ loaded: false, failed: true })}
          style={{ display: "none" }}
        />
        {transition.map(({ item, key, props }) => {
          if (item) {
            return (
              <ObjectImage
                src={imageUrl}
                loaded={loadState.loaded}
                style={props}
                noTitle={noTitle}
                key={key}
              ></ObjectImage>
            );
          } else {
            if (loadState.failed) {
              return (
                <FallbackImage>
                  <UserIcon color="#4b4848" />
                </FallbackImage>
              );
            } else {
              return null;
            }
          }
        })}
        {!noTitle && <ObjectName>{name}</ObjectName>}
      </MediaObject>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjectView;
