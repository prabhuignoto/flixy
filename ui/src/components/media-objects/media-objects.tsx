import React from "react";
import { MediaObject as MediaObjectModel } from "../../models/MediaObject";
import {
  ObjectsWrapper,
  ObjectsContainer,
  MediaObjectContainer,
  ScrollLeftBtn,
  ScrollRightBtn,
} from "./media-objects.styles";
import { ChevronLeftIcon, ChevronRightIcon } from "./../icons/index";
import { FixedSizeList } from "react-window";
import MediaObjectView from "./media-object";

enum ScrollDir {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

const MediaObjects: React.FunctionComponent<{
  id: number;
  items: MediaObjectModel[];
  title?: string;
}> = React.memo(
  ({ items, title }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const rWindowRef = React.useRef<HTMLDivElement>(null);
    const [config, setConfig] = React.useState({
      show: false,
      clientWidth: 0,
      count: 0,
    });
    const [disableRightNav, setDisableRightNav] = React.useState(false);
    const [disableLeftNav, setDisableLeftNav] = React.useState(true);

    const handleNav = (dir: ScrollDir) => {
      if (rWindowRef && rWindowRef.current) {
        const { clientWidth, scrollWidth } = rWindowRef.current;

        if (dir === ScrollDir.RIGHT) {
          rWindowRef.current.scrollLeft += Math.round(
            config.clientWidth * 0.75
          );
        } else {
          rWindowRef.current.scrollLeft -= Math.round(
            config.clientWidth * 0.75
          );
        }

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

    React.useEffect(() => {
      if (containerRef && containerRef.current) {
        const { clientWidth, scrollWidth } = containerRef.current;

        setConfig({
          show: true,
          clientWidth,
          count: items.length,
        });
      }
    }, []);

    let view = null;

    if (config.show) {
      view = (
        <>
          {/* <ObjectHeader>{title}</ObjectHeader> */}
          <ObjectsWrapper>
            <FixedSizeList
              layout="horizontal"
              itemCount={config.count}
              itemSize={110}
              width={config.clientWidth}
              height={140}
              outerRef={rWindowRef}
              style={{ overflow: "hidden", scrollBehavior: "smooth" }}
            >
              {({ index, style }) => {
                const { name, path, id } = items[index];
                return (
                  <MediaObjectContainer
                    key={`${id}-${index}-${name}`}
                    style={style}
                  >
                    <MediaObjectView name={name} path={path} id={id} />
                  </MediaObjectContainer>
                );
              }}
            </FixedSizeList>
          </ObjectsWrapper>
        </>
      );
    } else {
      view = null;
    }

    return (
      <ObjectsContainer ref={containerRef}>
        <ScrollLeftBtn
          onClick={() => handleNav(ScrollDir.LEFT)}
          disable={disableLeftNav}
        >
          <ChevronLeftIcon />
        </ScrollLeftBtn>
        {view}
        <ScrollRightBtn
          onClick={() => handleNav(ScrollDir.RIGHT)}
          disable={disableRightNav}
        >
          <ChevronRightIcon />
        </ScrollRightBtn>
      </ObjectsContainer>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjects;
