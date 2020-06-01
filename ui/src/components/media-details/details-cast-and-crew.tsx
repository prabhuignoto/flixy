import React from "react";
import CastDetails from "./../../containers/details/castDetails";
import { CastDetailsContainer } from "./details-cast-and-crew.styles";
import useResponsive from "../../effects/useResponsive";
import { SliderType } from "../../models/Slider";

export const CastAndCrew: React.FunctionComponent<{
  id?: number | string;
  sliderType?: SliderType;
}> = React.memo(
  ({ id, sliderType }) => {
    const resxProps = useResponsive();
    return <CastDetailsContainer resxProps={resxProps}>
      <CastDetails
        movieId={id}
        title="Movie Cast"
        sliderType={sliderType}
        isCast
      />
    </CastDetailsContainer>
  },
  (prev, current) => prev.id === current.id
);
