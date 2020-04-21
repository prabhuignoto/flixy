import * as React from "react";
import Movie from "../../models/Movie";
import { CardContainer } from "./card.style";
import { CardSize } from "../../models/CardSize";
import { useSpring, config } from "react-spring";
import Poster from "../media-poster/poster";

type MovieType = Movie & {
  index?: number;
  onSelect?: (id: number) => void;
  size?: CardSize;
  loadingCard?: boolean;
};

export default ({
  id,
  poster_path,
  onSelect,
  selected,
  size,
  index,
  loadingCard,
  title,
}: MovieType) => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0.5 },
    config: config.slow,
  });

  const handleSelection = (id: number) => {
    onSelect && onSelect(id);
  };

  return (
    <>
      {!loadingCard ? (
        <CardContainer
          onClick={() => handleSelection(id)}
          selected={selected}
          size={size}
          style={props}
        >
          <Poster
            poster_path={poster_path ? poster_path : ""}
            index={index}
            size={size}
            title={title}
          ></Poster>
        </CardContainer>
      ) : (
        <CardContainer size={size} isLoadingCard={loadingCard ? 1 : 0}>
        </CardContainer>
      )}
    </>
  );
};
