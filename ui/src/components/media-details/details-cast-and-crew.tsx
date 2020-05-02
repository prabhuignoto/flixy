import React from "react";
import CastDetails from "./../../containers/details/castDetails";
import { CastDetailsContainer } from "./details-cast-and-crew.styles";

export const CastAndCrew: React.FunctionComponent<{
  id: number;
  objectColumns: number;
}> = React.memo(
  ({ id, objectColumns }) => (
    <CastDetailsContainer>
      <CastDetails
        movieId={id}
        objectColumns={objectColumns}
        title="Movie Cast"
        isCast
      />
      <CastDetails
        movieId={id}
        objectColumns={objectColumns}
        title="Movie Crew"
      />
    </CastDetailsContainer>
  ),
  (prev, current) => prev.id === current.id
);
