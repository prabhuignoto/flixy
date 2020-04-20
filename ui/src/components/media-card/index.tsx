import * as React from "react";
import Movie from "../../models/Movie";
import {
  CardContainer,
  CardImageWrapper,
  CardImage,
  CardRating,
} from "./card.style";
import { CardSize } from "../../models/CardSize";
import { useSpring, config } from "react-spring";

type MovieType = Movie & {
  index: number;
  onSelect: (id: number) => void;
  size?: CardSize;
};

export default ({
  id,
  poster_path,
  onSelect,
  selected,
  size,
  index,
}: MovieType) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.7 },
    config: config.slow
  });

  const handleSelection = (id: number) => {
    onSelect(id);
  };

  return (
    <CardContainer
      onClick={() => handleSelection(id)}
      selected={selected}
      size={size}
      style={props}
    >
      {
        <>
          <CardRating>{index}</CardRating>
          {poster_path && (
            <CardImageWrapper selected={selected}>
              <CardImage
                src={`http://image.tmdb.org/t/p/w${size}/${poster_path}`}
              ></CardImage>
            </CardImageWrapper>
          )}
        </>
      }
    </CardContainer>
  );
};
