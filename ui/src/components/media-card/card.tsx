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
    release_date,
    overview,
  }: MovieType) => {
    const [options, setOptions] = React.useState({
      showExtended: false,
      flipCard: false,
    });
    const handleSelection = React.useCallback(
      (id: number) => {
        setOptions(
          Object.assign({}, options, {
            showExtended: false,
          })
        );
        onSelect && onSelect(id);
      },
      [id]
    );
    const cardRef = React.useRef<HTMLDivElement>(null);

    const onShow = React.useCallback(() => {
      setOptions(
        Object.assign({}, options, {
          showExtended: true,
        })
      )
    }, [options]);

    const onHide = React.useCallback(() => {
      debugger;
      setOptions(
        Object.assign({}, options, {
          showExtended: false,
        })
      )
    }, [options]);

    React.useEffect(() => {
      if (cardRef && cardRef.current) {
        const { offsetLeft } = cardRef.current;
        if (offsetLeft + 500 > window.innerWidth) {
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
            onMouseEnter={onShow}
            resxProps={resxProps}
            selected={selected}
            size={size}
            ref={cardRef}
          >
            {!options.showExtended && (
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
            {options.showExtended && (
              <CardExtended
                poster_path={poster_path}
                title={title}
                id={id}
                show={options.showExtended}
                release_date={release_date}
                overview={overview}
                onClick={handleSelection}
                flip={options.flipCard}
                closePane={onHide}
              />
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
