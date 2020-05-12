import * as React from "react";
import { Poster } from "../../models/Poster";
import {
  PosterWrapper,
  CardImage,
  CardImageWrapper,
  CardRating,
} from "./poster-styles";
import { CardSize } from "../../models/CardSize";

export default React.memo(({ poster_path, size, index }: Poster) => {
  return (
    <PosterWrapper size={size}>
      {/* {size === CardSize.small && <CardRating>{index}</CardRating>} */}
      {poster_path && (
        <CardImageWrapper selected={false}>
          <CardImage
            title=""
            src={`http://image.tmdb.org/t/p/w${size}/${poster_path}`}
          ></CardImage>
        </CardImageWrapper>
      )}
    </PosterWrapper>
  );
});
