import React from "react";
import CastDetails from "./../../containers/details/castDetails";
import { CastDetailsContainer } from "./details-cast-and-crew.styles";

export const CastAndCrew: React.FunctionComponent<{
  id: number;
}> = React.memo(
  ({ id }) => {
    return <CastDetailsContainer>
      <CastDetails
        movieId={id}
        title="Movie Cast"
        isCast
      />
    </CastDetailsContainer>
  },
  (prev, current) => prev.id === current.id
);
