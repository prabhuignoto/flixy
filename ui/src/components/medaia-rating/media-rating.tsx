import React from "react";
import { MediaRatingWrapper, StarIconWrapper } from "./media-rating.style";
import { StarIcon, StarHalfIcon, StarBorderIcon } from "../icons";

const MediaRating: React.FunctionComponent<{ rating: number }> = ({
  rating,
}) => {
  let ratingVal = (rating / 10) * 5;

  return (
    <MediaRatingWrapper>
      {Array.from({ length: 5 }).map((val, idx) => {
        debugger;
        if (ratingVal - (idx + 1) >= 0) {
          return (
            <StarIconWrapper>
              <StarIcon color="#191919" />
            </StarIconWrapper>
          );
        } else if (
          Math.abs(ratingVal - (idx + 1)) > 0 &&
          Math.abs(ratingVal - (idx + 1)) < 1
        ) {
          return (
            <StarIconWrapper>
              <StarHalfIcon color="#191919" />
            </StarIconWrapper>
          );
        } else {
          return (
            <StarIconWrapper>
              <StarBorderIcon color="#191919" />
            </StarIconWrapper>
          );
        }
      })}
    </MediaRatingWrapper>
  );
};

export default MediaRating;
