import React from "react";
import {
  DetailsRatingValue,
  DetailsRatingWrapper,
} from "./details-rating.style";
import { CrownIcon } from "../../icons";

const DetailsRating: React.FunctionComponent<{ rating?: number }> = ({
  rating,
}) => (
  <DetailsRatingWrapper rating={rating}>
    <DetailsRatingValue>
      {/* <CrownIcon color="#fff"></CrownIcon> */}
      {`${rating}`}
    </DetailsRatingValue>
  </DetailsRatingWrapper>
);

export default DetailsRating;
