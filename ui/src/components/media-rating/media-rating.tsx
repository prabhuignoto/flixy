import React from 'react';
import {MediaRatingWrapper, StarIconWrapper} from './media-rating.style';
import {StarIcon, StarHalfIcon, StarBorderIcon} from '../icons';

export enum RatingSize {
  small = 'small',
  large = 'large',
}

const MediaRating: React.FunctionComponent<{
  rating: number;
  size?: RatingSize;
}> = ({rating, size}) => {
  let ratingVal = (rating / 10) * 5;

  return (
    <MediaRatingWrapper>
      {Array.from({length: 5}).map((val, idx) => {
        if (ratingVal - (idx + 1) >= 0) {
          return (
            <StarIconWrapper size={size} key={idx}>
              <StarIcon color="#191919" />
            </StarIconWrapper>
          );
        } else if (
          Math.abs(ratingVal - (idx + 1)) > 0 &&
          Math.abs(ratingVal - (idx + 1)) < 1
        ) {
          return (
            <StarIconWrapper size={size} key={idx}>
              <StarHalfIcon color="#191919" />
            </StarIconWrapper>
          );
        } else {
          return (
            <StarIconWrapper size={size} key={idx}>
              <StarBorderIcon color="#191919" />
            </StarIconWrapper>
          );
        }
      })}
    </MediaRatingWrapper>
  );
};

export default MediaRating;
