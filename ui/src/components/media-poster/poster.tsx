import * as React from "react";
import { Poster } from "../../models/Poster";
import {
  PosterWrapper,
  CardImage,
  CardImageWrapper,
  Star,
} from "./poster-styles";
import { MedalIcon } from "../icons";
import useResponsive from "../../effects/useResponsive";

export default React.memo(
  ({ poster_path, size, title, rating }: Poster) => {
    const resx = useResponsive();
    const [loaded, setLoaded] = React.useState(false);
    const src = `https://image.tmdb.org/t/p/w${size}/${poster_path}`;

    return (
      <PosterWrapper size={size}>
        {poster_path && (
          <CardImageWrapper selected={false}>
            <img
              style={{ display: "none" }}
              src={src}
              onLoad={() => setLoaded(true)}
            />
            {loaded && (
              <CardImage
                title=""
                alt={title}
                src={src}
                loading="lazy"
              ></CardImage>
            )}
            {loaded && rating && rating > 8 ? (
              <Star resx={resx}>
                <MedalIcon color="#ffd700" />
              </Star>
            ) : null}
          </CardImageWrapper>
        )}
      </PosterWrapper>
    );
  },
  (prev, cur) => prev.id === cur.id
);
