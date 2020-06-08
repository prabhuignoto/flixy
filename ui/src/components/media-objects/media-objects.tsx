import React from "react";
import {
  MediaObject as MediaObjectModel,
  ThumbnailSize,
  MediaObject,
} from "../../models/MediaObject";
import {
  ObjectsWrapper,
  ObjectsContainer,
  ScrollLeftBtn,
  ScrollRightBtn,
  ObjectHeader,
  ExpandButton,
} from "./media-objects.styles";
import { ChevronLeftIcon, ChevronRightIcon, ChevronRightSolidIcon } from "./../icons/index";
import withExtendedInfo from "../HOCS/withExtendInfo";
import Card from "../media-card/card";
import { nanoid } from "nanoid";
import useResponsive from "../../effects/useResponsive";
import MediaList from "./media-list";
import MediaModal from "../media-modal/media-modal";
import MediaGrid from "./media-grid";
import { throttle } from "throttle-debounce";

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
  hideObjectsWithNoImage?: boolean;
  showExpand?: boolean;
  onSelect?: (m: MediaObject) => void;
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
    hideObjectsWithNoImage,
    showExpand,
    onSelect
  }) => {
    const containerRef = React.createRef<HTMLUListElement>();
    const rWindowRef = React.useRef<HTMLDivElement>(null);
    const [showExpandedView, setExpandedView] = React.useState(false);

    const [config, setConfig] = React.useState({
      show: false,
      clientWidth: 0,
      count: 0,
      clientHeight: 0,
    });
    const [disableRightNav, setDisableRightNav] = React.useState(true);
    const [disableLeftNav, setDisableLeftNav] = React.useState(true);
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
      setTimeout(() => {
        if (containerRef && containerRef.current) {
          const node = containerRef.current as HTMLUListElement;
          const { clientWidth, clientHeight } = node;
          setConfig({
            show: true,
            clientWidth,
            count: hideObjectsWithNoImage
              ? items.filter((item) => item.path).length
              : items.length,
            clientHeight: clientHeight - 40,
          });
        }
      }, 500);
    }, []);

    const onItemsRendered = React.useCallback(() => {
      if (rWindowRef && rWindowRef.current) {
        const node = rWindowRef.current as HTMLDivElement;
        const { clientWidth, scrollWidth } = node;
        const scrolledWidth = clientWidth + rWindowRef.current.scrollLeft;
        
        if (Math.ceil(scrolledWidth) === scrollWidth) {
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
    }, []);

    const onModalClose = React.useCallback(() => setExpandedView(false), []);

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
              onItemsRendered={throttle(250, onItemsRendered)}
              items={items}
              noTitle={noTitle}
              useExtendedCard={useExtendedCard}
              thumbnailSize={thumbnailSize}
              id={title ? id + title : id.toString()}
              containerId={containerId}
              hideObjectsWithNoImage={hideObjectsWithNoImage}
              onSelect={onSelect}
            />
          }
        </>
      );
    } else {
      view = null;
    }
    return (
      <ObjectsContainer height={height} noBackground={noBackground}>
        
        {showExpand && !disableRightNav && (
          <ExpandButton onClick={() => setExpandedView(true)}>
            <span>view all</span>
            <ChevronRightSolidIcon color="#fff"></ChevronRightSolidIcon>
          </ExpandButton>
        )}

        {showExpand && (
          <MediaModal
            onClose={onModalClose}
            open={showExpandedView}
            title={title}
          >
            <MediaGrid
              items={items}
              itemHeight={resxProps.isBigScreen ? 250 : 160}
              itemWidth={resxProps.isBigScreen ? 180 : 130}
            ></MediaGrid>
          </MediaModal>
        )}
        
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
