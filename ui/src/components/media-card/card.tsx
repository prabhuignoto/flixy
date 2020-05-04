import * as React from "react";
import Movie from "../../models/Movie";
import { CardContainer, CardCheckedWrapper } from "./card.style";
import { CardSize } from "../../models/CardSize";
import Poster from "../media-poster/poster";
import { CheckIcon } from "../icons";

type MovieType = Movie & {
  index?: number;
  onSelect?: (id: number) => void;
  size?: CardSize;
  loadingCard?: boolean;
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
  }: MovieType) => {
    const handleSelection = React.useCallback(
      (id: number) => {
        onSelect && onSelect(id);
      },
      [id]
    );

    return (
      <>
        {!loadingCard ? (
          <CardContainer
            onClick={() => id && handleSelection(id)}
            selected={selected}
            size={size}
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
        ) : // <CardContainer
        //   size={size}
        //   isLoadingCard={loadingCard ? 1 : 0}
        // >
        //   <ImageIconWrapper>
        //     <ImageIcon color="#4b4848" />
        //   </ImageIconWrapper>
        // </CardContainer>
        null}
      </>
    );
  },
  (prev, current) => prev.id === current.id
);
