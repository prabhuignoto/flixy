import React from "react";
import { MediaObject as MediaObjectModel } from "../../models/MediaObject";
import { ObjectsWrapper, Object, ObjectImage, ObjectName } from "./object.styles";

const MediaObjects: React.FunctionComponent<{ items: MediaObjectModel[], columns: number }> = ({
  items,
  columns
}) => (
  <ObjectsWrapper columns={columns}>
    {items.map(({ name, path, id }) => (
      <Object key={id}>
        <ObjectImage src={`http://image.tmdb.org/t/p/w200/${path}`} />
        <ObjectName>{name}</ObjectName>
      </Object>
    ))}
  </ObjectsWrapper>
);

export default MediaObjects;