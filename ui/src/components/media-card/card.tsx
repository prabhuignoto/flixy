import * as React from "react";
import Movie from "../../models/Movie";
import {
  CardContainer,
  CardCheckedWrapper,
  ImageIconWrapper,
  ViewBtnWrapper,
} from "./card.style";
import { CardSize } from "../../models/CardSize";
import Poster from "../media-poster/poster";
import { CheckIcon, ImageIcon, ViewIcon } from "../icons";
import { responsiveProps } from "../../effects/useResponsive";
import CardExtended from "./card-extended";

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
    resxProps,
    release_date
  }: MovieType) => {
    const [options, setOptions] = React.useState({
      showExtended: false,
    });
    const handleSelection = React.useCallback(
      (id: number) => {
        onSelect && onSelect(id);
      },
      [id]
    );
    return (
      <React.StrictMode>
        {!loadingCard ? (
          <CardContainer
            onMouseEnter={() =>
              setOptions({
                showExtended: true,
              })
            }
            onMouseLeave={() => {
              setOptions({
                showExtended: false,
              })
            }}
            selected={selected}
            size={size}
            resxProps={resxProps}
          >
            {!options.showExtended && (
              <div
                onClick={() => id && handleSelection(id)}
                style={{ height: "100%" }}
              >
                <Poster
                  poster_path={poster_path ? poster_path : ""}
                  index={index}
                  size={size}
                  title={title}
                  id={id}
                ></Poster>
              </div>
            )}
            <CardExtended
              poster_path={poster_path}
              title={title}
              id={id}
              show={options.showExtended}
              release_date={release_date}
            />
            {selected && (
              <CardCheckedWrapper>
                <CheckIcon />
              </CardCheckedWrapper>
            )}
            {/* {options.showMaximize && (
              <ViewBtnWrapper
              >
                <ViewIcon color="#191919" />
              </ViewBtnWrapper>
            )} */}
          </CardContainer>
        ) : (
          <CardContainer size={size} isLoadingCard={loadingCard ? 1 : 0}>
            <ImageIconWrapper>
              <ImageIcon color="#4b4848" />
            </ImageIconWrapper>
          </CardContainer>
        )}
      </React.StrictMode>
    );
  },
  (prev, current) => prev.id === current.id
);
