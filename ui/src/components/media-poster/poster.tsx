import * as React from "react";
import { Poster } from "../../models/Poster";
import {
  PosterWrapper,
  CardImage,
  CardImageWrapper,
  CardRating,
} from "./poster-styles";

export default React.memo(({ poster_path, size, index, id }: Poster) => {
  return (
    <PosterWrapper size={size}>
      {poster_path && (
        <CardImageWrapper selected={false}>
          <CardImage
            title=""
            src={`https://image.tmdb.org/t/p/w${size}/${poster_path}`}
          ></CardImage>
        </CardImageWrapper>
      )}
    </PosterWrapper>
  );
}, (prev, cur) => prev.id === cur.id);
