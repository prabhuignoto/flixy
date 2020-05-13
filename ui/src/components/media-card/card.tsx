import * as React from "react";
import Movie from "../../models/Movie";
import { CardContainer, CardCheckedWrapper, ImageIconWrapper } from "./card.style";
import { CardSize } from "../../models/CardSize";
import Poster from "../media-poster/poster";
import { CheckIcon, ImageIcon } from "../icons";
import { useSpring, config } from "react-spring";
import { responsiveProps } from "../../effects/useResponsive";

type MovieType = Movie & {
  index?: number;
  loadingCard?: boolean;
  onSelect?: (id: number) => void;
  size?: CardSize;
  style?: any;
  resxProps: responsiveProps;
};

export default React.memo(
  ({
    id,
    poster_path,
    onSelect,
    selected,
    size,
    index,
    loadingCard,
    title,
    resxProps
  }: MovieType) => {
    const handleSelection = React.useCallback(
      (id: number) => {
        onSelect && onSelect(id);
      },
      [id]
    );
    const props = useSpring({
      opacity: 1,
      from: {
        opacity: 0,
      },
      delay: 0,
      config: config.molasses
    })

    return (
      <>
        {!loadingCard ? (
          <CardContainer
            onClick={() => id && handleSelection(id)}
            selected={selected}
            size={size}
            resxProps={resxProps}
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
          <CardContainer size={size} isLoadingCard={loadingCard ? 1 : 0}>
            <ImageIconWrapper>
              <ImageIcon color="#4b4848" />
            </ImageIconWrapper>
          </CardContainer>
        )}
      </>
    );
  },
  (prev, current) => prev.id === current.id
);
