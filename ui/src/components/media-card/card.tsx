import * as React from "react";
import Movie from "../../models/Movie";
import {
  CardContainer,
  CardCheckedWrapper,
  ImageIconWrapper,
} from "./card.style";
import { CardSize } from "../../models/CardSize";
import Poster from "../media-poster/poster";
import { CheckIcon, ImageIcon, ViewIcon } from "../icons";
import useResponsive, { responsiveProps } from "../../effects/useResponsive";

export type MovieType = Movie & {
  index?: number;
  loadingCard?: boolean;
  onSelect?: (id: number | string) => void;
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
    autoHeight
  }: MovieType) => {
    const [options, setOptions] = React.useState({
      showExtendIcon: false,
      flipCard: false,
      showPane: false,
    });
    const cardRef = React.useRef<HTMLDivElement>(null);
    const handleSelection = React.useCallback(
      (id: number | string) => {
        onSelect && onSelect(id);
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
            {!options.showPane && (
              <div style={{ height: "100%" }}>
                <Poster
                  poster_path={poster_path ? poster_path : ""}
                  index={index}
                  size={size}
                  title={title}
                  id={id}
                ></Poster>
              </div>
            )}
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
