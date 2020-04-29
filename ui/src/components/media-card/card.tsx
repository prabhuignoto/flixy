import * as React from "react";
import Movie from "../../models/Movie";
import { CardContainer, CardCheckedWrapper, ImageIconWrapper } from "./card.style";
import { CardSize } from "../../models/CardSize";
import { useSpring, config } from "react-spring";
import Poster from "../media-poster/poster";
import { CheckIcon, ImageIcon } from "../icons";

type MovieType = Movie & {
  index?: number;
  onSelect?: (id: number) => void;
  size?: CardSize;
  loadingCard?: boolean;
};

export default 
  ({
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
            onClick={() => id && handleSelection(id)}
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
            {selected && (
              <CardCheckedWrapper>
                <CheckIcon />
              </CardCheckedWrapper>
            )}
          </CardContainer>
        ) : (
          <CardContainer
            size={size}
            isLoadingCard={loadingCard ? 1 : 0}
          >
            <ImageIconWrapper>
              <ImageIcon color="#151515" />
            </ImageIconWrapper>
          </CardContainer>
        )}
      </>
    );
  }