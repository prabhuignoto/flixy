import React from "react";
import { MediaObject as MediaObjectModel } from "../../models/MediaObject";
import {
  ObjectsWrapper,
  Object,
  ObjectImage,
  ObjectName,
  FallbackImage,
  ObjectHeader,
  ObjectsContainer,
  MediaObjectContainer,
} from "./object.styles";
import { UserIcon } from "./../icons/index";
import { FixedSizeList } from "react-window";

const MediaObjects: React.FunctionComponent<{
  id: number;
  items: MediaObjectModel[];
  title?: string;
}> = React.memo(
  ({ items, title }) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const [config, setConfig] = React.useState({
      show: false,
      clientWidth: 0,
      count: 0,
    });

    React.useEffect(() => {
      debugger;
      const width = containerRef && containerRef.current?.clientWidth;

      if (width) {
        setConfig({
          show: true,
          clientWidth: width,
          count: items.length,
        });
      }
    }, []);

    let view = null;

    if (config.show) {
      view = (
        <>
          <ObjectHeader>{title}</ObjectHeader>
          <ObjectsWrapper>
            <FixedSizeList
              layout="horizontal"
              itemCount={config.count}
              itemSize={120}
              width={config.clientWidth}
              height={180}
              style={{ overflow: "hidden", scrollBehavior: "smooth" }}
            >
              {({ index, style }) => {
                const { name, path, id } = items[index];
                return (
                  <MediaObjectContainer
                    key={`${id}-${index}-${name}`}
                    style={style}
                  >
                    <MediaObject name={name} path={path} id={id} />
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

    return <ObjectsContainer ref={containerRef}>{view}</ObjectsContainer>;
  },
  (prev, current) => prev.id === current.id
);

const MediaObject: React.FunctionComponent<MediaObjectModel> = React.memo(
  ({ path, id, name }) => {
    const [loaded, setLoaded] = React.useState(false);
    return (
      <Object>
        {path ? (
          <ObjectImage
            src={`http://image.tmdb.org/t/p/w200/${path}`}
            onLoad={() => setLoaded(true)}
            loaded={loaded}
          ></ObjectImage>
        ) : (
          <FallbackImage>
            <UserIcon color="#4b4848" />
          </FallbackImage>
        )}
        <ObjectName>{name}</ObjectName>
      </Object>
    );
  },
  (prev, current) => prev.id === current.id
);

export default MediaObjects;
