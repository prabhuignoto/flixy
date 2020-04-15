import * as React from "react";
import Movie from "../../models/Movie";
import {
  CardContainer,
  CardImageWrapper,
  CardImage,
  CardTitle,
  CardHeader,
  CardRating,
  CardFooter,
} from "./card.style";
import { CardSize } from "../../models/CardSize";
import { useSpring } from "react-spring";

type MovieType = Movie & { onSelect: (id: number) => void; size?: CardSize };

export default ({
  id,
  poster_path,
  onSelect,
  selected,
  size,
  title,
  release_date,
  vote_average,
}: MovieType) => {
  const [props, set] = useSpring(() => ({
    scale: 0,
  }));

  const handleSelection = (id: number) => {
    set({});
    onSelect(id);
  };

  return (
    <CardContainer
      onClick={() => handleSelection(id)}
      selected={selected}
      size={size}
      style={props}
    >
      <CardRating>{vote_average}</CardRating>
      <CardImageWrapper selected={selected}>
        <CardImage
          src={`http://image.tmdb.org/t/p/w${size}/${poster_path}`}
        ></CardImage>
      </CardImageWrapper>
      {/* <CardFooter>
        <CardTitle>{title}</CardTitle>
      </CardFooter> */}
    </CardContainer>
  );
};
