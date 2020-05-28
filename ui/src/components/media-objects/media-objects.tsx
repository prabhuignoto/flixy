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
import withExtendedInfo from "../HOCS/withExtendInfo";
import Card from "../media-card/card";
import { CardSize } from "../../models/CardSize";
import { nanoid } from "nanoid";
import { PositioningStrategy } from "../media-card/card-extended";
import useResponsive from "../../effects/useResponsive";
import MediaList from "./media-list";

const ExtendedCard = withExtendedInfo(Card);

enum ScrollDir {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export interface MediaObjectsModel {
  id: number | string;
  items: MediaObjectModel[];
  title?: string;
  height: number;
  itemSize: number;
  thumbnailSize: ThumbnailSize;
  noTitle?: boolean;
  noBackground?: boolean;
  useExtendedCard?: boolean;
}

const MediaObjects: React.FunctionComponent<MediaObjectsModel> = React.memo(
  ({
    items,
    height,
    itemSize,
    thumbnailSize,
    title,
    noTitle,
    noBackground,
    useExtendedCard,
    id,
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
    const [disableLeftNav, setDisableLeftNav] = React.useState(false);
    const containerId = nanoid();
    const resxProps = useResponsive();

    const handleNav = (dir: ScrollDir) => {
      if (rWindowRef && rWindowRef.current) {
        if (dir === ScrollDir.RIGHT) {
          rWindowRef.current.scrollTo({
            behavior: "smooth",
            left:
              rWindowRef.current.scrollLeft +
              Math.round(config.clientWidth * 0.8),
          });
        } else {
          rWindowRef.current.scrollTo({
            behavior: "smooth",
            left:
              rWindowRef.current.scrollLeft -
              Math.round(config.clientWidth * 0.8),
          });
        }
      }
    };

    React.useEffect(() => {
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

        if (scrolledWidth / scrollWidth > 0.9) {
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
          {
            <MediaList
              layout="horizontal"
              itemCount={config.count}
              itemSize={itemSize}
              width={config.clientWidth}
              height={config.clientHeight}
              outerRef={rWindowRef}
              onItemsRendered={onItemsRendered}
              items={items}
              noTitle={noTitle}
              useExtendedCard={useExtendedCard}
              thumbnailSize={thumbnailSize}
              id={title ? id + title : id.toString()}
              containerId={containerId}
            />
          }
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
          resx={resxProps}
        >
          <ChevronLeftIcon color={!disableLeftNav ? "#cc0000" : "#191919"} />
        </ScrollLeftBtn>
        <ObjectsWrapper
          ref={containerRef}
          leftButton={disableLeftNav}
          rightButton={disableRightNav}
          noBackground={noBackground}
          resx={resxProps}
        >
          {view}
        </ObjectsWrapper>
        <ScrollRightBtn
          onClick={() => handleNav(ScrollDir.RIGHT)}
          disable={disableRightNav}
          size={thumbnailSize}
          resx={resxProps}
        >
          <ChevronRightIcon color={!disableRightNav ? "#cc0000" : "#191919"} />
        </ScrollRightBtn>
      </ObjectsContainer>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjects;
