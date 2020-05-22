import React from "react";
import {
  MediaObject as MediaObjectModel,
  ThumbnailSize,
} from "../../models/MediaObject";
import {
  ObjectsWrapper,
  ObjectsContainer,
  MediaObjectContainer,
  ScrollLeftBtn,
  ScrollRightBtn,
  ObjectHeader,
} from "./media-objects.styles";
import { ChevronLeftIcon, ChevronRightIcon } from "./../icons/index";
import { FixedSizeList } from "react-window";
import MediaObjectView from "./media-object";

enum ScrollDir {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}
const MediaObjects: React.FunctionComponent<{
  id: number | string;
  items: MediaObjectModel[];
  title?: string;
  height: number;
  itemSize: number;
  thumbnailSize: ThumbnailSize;
  noTitle?: boolean;
  noBackground?: boolean;
}> = React.memo(
  ({
    items,
    height,
    itemSize,
    thumbnailSize,
    title,
    noTitle,
    noBackground,
  }) => {
    const containerRef = React.createRef<HTMLUListElement>();
    const rWindowRef = React.useRef<HTMLDivElement>(null);
    const [config, setConfig] = React.useState({
      show: false,
      clientWidth: 0,
      count: 0,
      clientHeight: 0,
    });
    const [disableRightNav, setDisableRightNav] = React.useState(false);
    const [disableLeftNav, setDisableLeftNav] = React.useState(true);

    const handleNav = (dir: ScrollDir) => {
      if (rWindowRef && rWindowRef.current) {
        const { clientWidth, scrollWidth } = rWindowRef.current;

        if (dir === ScrollDir.RIGHT) {
          rWindowRef.current.scrollLeft += Math.round(config.clientWidth * 0.8);
        } else {
          rWindowRef.current.scrollLeft -= Math.round(config.clientWidth * 0.8);
        }
      }
    };

    React.useLayoutEffect(() => {
      if (containerRef && containerRef.current) {
        const node = containerRef.current as HTMLUListElement;
        const { clientWidth, scrollWidth, clientHeight } = node;

        setConfig({
          show: true,
          clientWidth,
          count: items.length,
          clientHeight: clientHeight - 40,
        });
      }
    }, []);

    const onItemsRendered = () => {
      if (rWindowRef && rWindowRef.current) {
        const node = rWindowRef.current as HTMLDivElement;
        const { clientWidth, scrollWidth } = node;
        const scrolledWidth = clientWidth + rWindowRef.current.scrollLeft;

        if (scrolledWidth === scrollWidth) {
          setDisableRightNav(true);
        }

        if (scrolledWidth > clientWidth) {
          setDisableLeftNav(false);
        }
        if (scrolledWidth === clientWidth) {
          setDisableLeftNav(true);
        }
        if (scrolledWidth < scrollWidth) {
          setDisableRightNav(false);
        }
      }
    };

    let view = null;

    if (config.show) {
      view = (
        <>
          {!noTitle && <ObjectHeader>{title}</ObjectHeader>}
          <FixedSizeList
            layout="horizontal"
            itemCount={config.count}
            itemSize={itemSize}
            width={config.clientWidth}
            height={config.clientHeight}
            outerRef={rWindowRef}
            onItemsRendered={onItemsRendered}
            style={{
              overflow: "hidden",
              scrollBehavior: "smooth",
            }}
          >
            {({ index, style }) => {
              const { name, path, id } = items[index];

              return path ? (
                <MediaObjectContainer
                  key={`${id}-${index}-${name}`}
                  style={style}
                >
                  <MediaObjectView
                    name={name}
                    path={path}
                    id={id}
                    thumbnailSize={thumbnailSize}
                    noTitle={noTitle}
                  />
                </MediaObjectContainer>
              ) : null;
            }}
          </FixedSizeList>
        </>
      );
    } else {
      view = null;
    }

    return (
      <ObjectsContainer height={height} noBackground={noBackground}>
        <ScrollLeftBtn
          onClick={() => handleNav(ScrollDir.LEFT)}
          disable={disableLeftNav}
          size={thumbnailSize}
        >
          <ChevronLeftIcon />
        </ScrollLeftBtn>
        <ObjectsWrapper
          ref={containerRef}
          leftButton={disableLeftNav}
          rightButton={disableRightNav}
          noBackground={noBackground}
        >
          {view}
        </ObjectsWrapper>
        <ScrollRightBtn
          onClick={() => handleNav(ScrollDir.RIGHT)}
          disable={disableRightNav}
          size={thumbnailSize}
        >
          <ChevronRightIcon />
        </ScrollRightBtn>
      </ObjectsContainer>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjects;
