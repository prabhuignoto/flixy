import * as React from "react";
import Movie from "../../models/Media";
import {
  CardContainer,
  CardCheckedWrapper,
  ImageIconWrapper,
} from "./card.style";
import { CardSize } from "../../models/CardSize";
import Poster from "../media-poster/poster";
import { CheckIcon, ImageIcon } from "../icons";
import { responsiveProps } from "../../effects/useResponsive";
import { MediaObject } from "../../models/MediaObject";
import { atom } from "recoil";

export type MovieType = Movie & {
  index?: number;
  loadingCard?: boolean;
  onSelect?(m: MediaObject): void;
  size?: CardSize;
  style?: any;
  resxProps?: responsiveProps;
  autoHeight?: boolean;
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
    resxProps,
    autoHeight,
    vote_average,
  }: MovieType) => {
    const cardRef = React.useRef<HTMLDivElement>(null);
    const handleSelection = React.useCallback(
      (id: number | string) => {
        onSelect && onSelect({ id, name: title });
      },
      [id]
    );

    return (
      <>
        {!loadingCard ? (
          <CardContainer
            onClick={() => id && handleSelection(id)}
            resxProps={resxProps}
            selected={selected}
            size={size}
            ref={cardRef}
            autoHeight={autoHeight}
          >
            {
              <div style={{ height: "100%" }}>
                <Poster
                  poster_path={poster_path ? poster_path : ""}
                  index={index}
                  rating={vote_average}
                  size={size}
                  title={title}
                  id={id}
                ></Poster>
              </div>
            }
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
