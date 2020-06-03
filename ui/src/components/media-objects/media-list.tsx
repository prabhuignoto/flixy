import React, { RefObject } from "react";
import { FixedSizeList, Layout,  } from "react-window";
import { CardSize } from "../../models/CardSize";
import { PositioningStrategy } from "../media-card/card-extended";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import withExtendedInfo from "../HOCS/withExtendInfo";
import Card from "../media-card/card";
import { MediaObjectContainer } from "./media-objects.styles";
import MediaObjectView from "./media-object";

const ExtendedCard = withExtendedInfo(Card);

export interface MediaListModel {
  layout: Layout;
  itemCount: number;
  itemSize: number;
  width: number;
  height: number;
  outerRef: RefObject<HTMLDivElement>;
  onItemsRendered: () => void;
  items: MediaObject[];
  containerId?: string | number;
  noTitle?: boolean;
  thumbnailSize: ThumbnailSize;
  useExtendedCard?: boolean;
  id: string;
  hideObjectsWithNoImage?: boolean;
  onSelect?(m: MediaObject) : void;
}

const MediaList: React.FunctionComponent<MediaListModel> = React.memo(
  ({
    layout,
    height,
    itemCount,
    itemSize,
    onItemsRendered,
    outerRef,
    width,
    items,
    containerId,
    noTitle,
    thumbnailSize,
    useExtendedCard,
    hideObjectsWithNoImage,
    onSelect
  }) => (
    <div>
      <div id={`extended-card-enclosure-${containerId}`}></div>
      <FixedSizeList
        layout={layout}
        itemCount={itemCount}
        itemSize={itemSize}
        width={width}
        height={height}
        outerRef={outerRef}
        onItemsRendered={onItemsRendered}
        style={{
          overflow: "hidden",
          scrollBehavior: "smooth",
        }}
      >
        {({ index, style }) => {
          const {
            name,
            path,
            id,
            release_date,
            overview,
            vote_average,
          } = items[index];

          return (
            <MediaObjectContainer key={`${id}-${index}-${name}`} style={style}>
              {!useExtendedCard ? (
                <MediaObjectView
                  name={name}
                  path={path}
                  id={id}
                  thumbnailSize={thumbnailSize}
                  noTitle={noTitle}
                  hideObjectWithNoImage={hideObjectsWithNoImage}
                  onSelect={onSelect}
                />
              ) : (
                <ExtendedCard
                  title={name}
                  poster_path={path}
                  id={id}
                  size={CardSize.large}
                  release_date={release_date}
                  overview={overview}
                  containerId={containerId}
                  height={height}
                  vote_average={vote_average}
                  positioningStrategy={PositioningStrategy.absolute}
                  onSelect={onSelect}
                />
              )}
            </MediaObjectContainer>
          );
        }}
      </FixedSizeList>
    </div>
  ),
  (prev, cur) => prev.id === cur.id
);

export default MediaList;
