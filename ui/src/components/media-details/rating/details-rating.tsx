import React from "react";
import {
  DetailsRatingValue,
  DetailsRatingWrapper,
} from "./details-rating.style";
import { useMediaQuery } from "react-responsive";

const DetailsRating: React.FunctionComponent<{ rating?: number }> = ({
  rating,
}) => {
  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1224px)" });

  return (
    <DetailsRatingWrapper rating={rating} isTabletOrMobile={isTabletOrMobile}>
      <DetailsRatingValue isTabletOrMobile={isTabletOrMobile}>
        {/* <CrownIcon color="#fff"></CrownIcon> */}
        {`${rating}`}
      </DetailsRatingValue>
    </DetailsRatingWrapper>
  );
};

export default DetailsRating;
