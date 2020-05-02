import React from "react";
import { DetailsRatingValue, DetailsRatingWrapper } from "./details-rating.style";

const DetailsRating: React.FunctionComponent<{ rating?: number }> = ({
  rating,
}) => (
  <DetailsRatingWrapper rating={rating}>
    <DetailsRatingValue>{`${rating}`}</DetailsRatingValue>
  </DetailsRatingWrapper>
);

export default DetailsRating;