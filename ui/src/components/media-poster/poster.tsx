import * as React from "react";
import { Poster } from "../../models/Poster";
import {
  PosterWrapper,
  CardImage,
  CardImageWrapper,
  CardRating,
} from "./poster-styles";

export default ({ poster_path, size, index }: Poster) => (
  <PosterWrapper>
    {/* <CardRating>{index}</CardRating> */}
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
