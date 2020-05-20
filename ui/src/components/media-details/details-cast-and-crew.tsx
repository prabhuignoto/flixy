import React from "react";
import CastDetails from "./../../containers/details/castDetails";
import { CastDetailsContainer } from "./details-cast-and-crew.styles";
import useResponsive from "../../effects/useResponsive";

export const CastAndCrew: React.FunctionComponent<{
  id?: number;
}> = React.memo(
  ({ id }) => {
    const resxProps = useResponsive();
    return <CastDetailsContainer resxProps={resxProps}>
      <CastDetails
        movieId={id}
        title="Movie Cast"
        isCast
      />
    </CastDetailsContainer>
  },
  (prev, current) => prev.id === current.id
);
