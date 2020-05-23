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
import useResponsive, { responsiveProps } from "../../effects/useResponsive";
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
    release_date,
    overview,
    genres
  }: MovieType) => {
    const [options, setOptions] = React.useState({
      showExtendIcon: false,
      flipCard: false,
      showPane: false,
    });
    const cardRef = React.useRef<HTMLDivElement>(null);
    const { isTabletOrMobile } = useResponsive();
    const handleSelection = React.useCallback(
      (id: number) => {
        onSelect && onSelect(id);
      },
      [id]
    );

    const showPane = React.useCallback(
      (ev: React.MouseEvent<HTMLSpanElement>) => {
        ev.stopPropagation();
        setOptions(
          Object.assign({}, options, {
            showPane: true,
          })
        );
      },
      [options]
    );

    const hidePane = React.useCallback(
      (
        ev: React.MouseEvent<HTMLDivElement> & React.FocusEvent<HTMLDivElement>
      ) => {
        ev.stopPropagation();
        setOptions(
          Object.assign({}, options, {
            showPane: false,
            showExtendIcon: false,
          })
        );
      },
      [options]
    );

    React.useEffect(() => {
      if (!isTabletOrMobile && cardRef && cardRef.current) {
        const { offsetLeft } = cardRef.current;
        if (offsetLeft + 500 > window.screen.width) {
          setOptions(
            Object.assign({}, options, {
              flipCard: true,
            })
          );
        }
      }
    }, []);

    return (
      <>
        {!loadingCard ? (
          <CardContainer
            onClick={() => id && handleSelection(id)}
            onMouseEnter={() => {
              setOptions(
                Object.assign({}, options, {
                  showExtendIcon: true,
                })
              );
            }}
            onMouseLeave={() => {
              setOptions(
                Object.assign({}, options, {
                  showExtendIcon: false,
                })
              );
            }}
            resxProps={resxProps}
            selected={selected}
            size={size}
            ref={cardRef}
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

            {!isTabletOrMobile && (
              <CardExtended
                poster_path={poster_path}
                title={title}
                id={id}
                show={options.showPane}
                release_date={release_date}
                overview={overview}
                genres={genres}
                onClick={handleSelection}
                flip={options.flipCard}
                closePane={hidePane}
              />
            )}
            {selected && (
              <CardCheckedWrapper>
                <CheckIcon />
              </CardCheckedWrapper>
            )}
            {!isTabletOrMobile && options.showExtendIcon && (
              <ViewBtnWrapper onClick={showPane}>
                <ViewIcon color="#cc0000" />
              </ViewBtnWrapper>
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
