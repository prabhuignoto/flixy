import React from "react";
import {
  MediaObject,
  ObjectImage,
  FallbackImage,
  ImageContainer,
  ImageInfo,
} from "./media-object.style";
import { config, useTransition } from "react-spring";
import {
  MediaObject as MediaObjectModel,
  ThumbnailSize,
} from "../../models/MediaObject";

import { UserIcon } from "./../icons/index";
import useResponsive from "../../effects/useResponsive";

const MediaObjectView: React.FunctionComponent<MediaObjectModel> = React.memo(
  ({
    hideObjectWithNoImage,
    id,
    name,
    noTitle,
    onSelect,
    path,
    thumbnailSize,
  }) => {
    const resx = useResponsive();
    const imageUrl = `https://image.tmdb.org/t/p/${
      thumbnailSize === ThumbnailSize.large ? "w500" : "w200"
    }/${path}`;
    const [loadState, setLoadState] = React.useState({
      loaded: false,
      failed: false,
      default: true,
    });
    const [infoWidth, setInfoWidth] = React.useState(0);
    const ref = React.useRef<HTMLElement & HTMLImageElement>(null);

    React.useEffect(() => {
      if (!noTitle) {
        setTimeout(() => {
          if (loadState.loaded && ref.current) {
            setInfoWidth(ref.current?.width);
          } else if (loadState.failed && ref.current) {
            setInfoWidth(ref.current?.clientWidth);
          }
        }, 100);
      }
    }, [loadState, noTitle]);

    const transition = useTransition(loadState.loaded, null, {
      initial: {
        opacity: 0,
        transform: "scale(0)",
      },
      enter: {
        opacity: 1,
        transform: "scale(1)",
      },
      leave: {
        opacity: 0,
        transform: "scale(0)",
      },
      config: config.stiff,
      unique: true,
    });

    const canShow = hideObjectWithNoImage
      ? hideObjectWithNoImage && path
      : !hideObjectWithNoImage;

    return canShow ? (
      <MediaObject
        onClick={() => onSelect && onSelect({ name, id })}
      >
        <ImageContainer noTitle={noTitle ? 1 : 0}>
          <img
            src={imageUrl}
            onLoad={() =>
              setLoadState({ loaded: true, failed: false, default: false })
            }
            onError={() =>
              setLoadState({ loaded: false, failed: true, default: false })
            }
            style={{ display: "none" }}
          />

          {transition.map(({ item, key, props }) => {
            if (item) {
              return (
                <ObjectImage
                  src={imageUrl}
                  loaded={loadState.loaded ? 1 : 0}
                  style={props}
                  noTitle={noTitle ? 1 : 0}
                  ref={ref}
                  key={key}
                  alt={name}
                  loading="lazy"
                ></ObjectImage>
              );
            } else {
              if (loadState.failed) {
                return (
                  <FallbackImage key={key} ref={ref}>
                    <UserIcon color="#ccc" />
                  </FallbackImage>
                );
              } else {
                return null;
              }
            }
          })}
        </ImageContainer>
        {!noTitle && (
          <ImageInfo resx={resx} width={infoWidth}>
            {`${name}`}
          </ImageInfo>
        )}
      </MediaObject>
    ) : null;
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjectView;
