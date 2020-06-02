import React from "react";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import { FixedSizeGrid } from "react-window";
import { MediaGridWrapper, ScrollDown, ScrollUp } from "./media-grid.style";
import { MediaObjectContainer } from "./media-objects.styles";
import MediaObjectView from "./media-object";

interface MediaGridModel {
  items: MediaObject[];
  itemHeight: number;
  itemWidth: number;
}

const MediaGrid: React.FunctionComponent<MediaGridModel> = ({
  items,
  itemHeight,
  itemWidth,
}) => {
  const wrapperRef = React.useRef(null);
  const gridRef = React.useRef<HTMLDivElement>(null);

  const [gridConfig, setConfig] = React.useState({
    columnCount: 0,
    rowCount: 0,
    showGrid: false,
    containerHeight: 0,
    containerWidth: 0,
  });

  React.useEffect(() => {
    const node: HTMLElement | null = ((wrapperRef &&
      wrapperRef.current) as unknown) as HTMLElement;
    if (node) {
      const columnCount = Math.floor(node.clientWidth / itemWidth);
      const rowCount = Math.ceil(items.length / columnCount);

      setConfig({
        columnCount,
        rowCount,
        showGrid: true,
        containerHeight: node.clientHeight - 20,
        containerWidth: columnCount * itemWidth + 50,
      });
    }
  }, []);

  let view = null;

  if (gridConfig.showGrid) {
    const {
      columnCount,
      rowCount,
      containerHeight,
      containerWidth,
    } = gridConfig;
    view = (
      <FixedSizeGrid
        columnCount={columnCount}
        rowCount={rowCount}
        columnWidth={itemWidth}
        height={containerHeight}
        width={containerWidth}
        rowHeight={itemHeight + 20}
        style={{ margin: "0 auto", overflowY: "auto" }}
        outerRef={gridRef}
      >
        {({ columnIndex, style, rowIndex }) => {
          const item = items[rowIndex * columnCount + columnIndex];

          if (item) {
            const { name, path, id } = item;

            return (
              <MediaObjectContainer
                key={`${id}-${columnIndex}-${name}`}
                style={style}
              >
                <MediaObjectView
                  name={name}
                  path={path}
                  id={id}
                  thumbnailSize={ThumbnailSize.large}
                />
              </MediaObjectContainer>
            );
          } else {
            return null;
          }
        }}
      </FixedSizeGrid>
    );
  } else {
    view = null;
  }

  return <MediaGridWrapper ref={wrapperRef}>{view}</MediaGridWrapper>;
};

export default MediaGrid;
