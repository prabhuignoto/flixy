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
import { useTrail } from "react-spring";

const MediaObjects: React.FunctionComponent<{
  items: MediaObjectModel[];
  columns: number;
  title?: string;
}> = ({ items, columns, title }) => {
  return (
    <ObjectsContainer>
      <ObjectHeader>{title}</ObjectHeader>
      <ObjectsWrapper columns={columns}>
        {items.length &&
          items.map(({ name, path, id }, index) => {
            return (
              <MediaObjectContainer key={`${id}-${index}-${name}`}>
                <MediaObject name={name} path={path} id={id} />
              </MediaObjectContainer>
            );
          })}
      </ObjectsWrapper>
    </ObjectsContainer>
  );
};

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
  }
);

export default MediaObjects;
