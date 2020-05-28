import React, { ReactDOM } from "react";
import Movie from "../../models/Movie";
import {
  CardExtendedWrapper,
  CardExtendedPosterWrapper,
  CardExtendedPoster,
  CardExtendedInfo,
  ExtendedInfoTitle,
  ExtendInfoYear,
  ExtendedInfoOverview,
  ExtendedInfoClose,
  ExtendedInfoHeader,
  ExtendedInfoRating,
  Row2,
} from "./card-extended.styles";
import { useTransition, config } from "react-spring";
import useResponsive from "../../effects/useResponsive";
import { CloseIcon } from "../icons";
import Scrollbar from "react-custom-scrollbars";
import MediaRating from "../media-rating/media-rating";

export enum PositioningStrategy {
  normal = "normal",
  absolute = "absolute",
}

export type CardExtendedModel = Movie & {
  show?: boolean;
  onClick?: (id: number | string) => void;
  flip?: boolean;
  autoHeight?: boolean;
  height?: number;
  containerId?: string | number;
  position?: {
    x: number;
    y: number;
  };
  positioningStrategy?: PositioningStrategy;
  closePane?: (
    ev: React.MouseEvent<HTMLDivElement> & React.FocusEvent<HTMLDivElement>
  ) => void;
};

const CardExtended: React.FunctionComponent<CardExtendedModel> = ({
  autoHeight,
  closePane,
  flip,
  height,
  id,
  onClick,
  overview,
  position,
  poster_path,
  release_date,
  show,
  title,
  vote_average,
}) => {
  const { isBigScreen } = useResponsive();
  const transitions = useTransition(show, null, {
    from: {
      opacity: 0,
    },
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    config: config.default,
  });

  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    if (show) {
      setTimeout(() => {
        ref && ref.current && ref.current.focus();
      }, 100);
    }
  }, [show]);

  return (
    <div>
      {transitions.map(
        ({ item, key, props }) =>
          item && (
            <CardExtendedWrapper
              tabIndex={1}
              style={props}
              key={key}
              flip={flip}
              isBigScreen={isBigScreen}
              onClick={() => onClick && onClick(id)}
              ref={ref}
              autoHeight={autoHeight}
              position={position || { x: 0, y: 0 }}
              height={height}
            >
              <CardExtendedPosterWrapper flip={flip}>
                <CardExtendedPoster
                  src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                ></CardExtendedPoster>
              </CardExtendedPosterWrapper>
              <CardExtendedInfo flip={flip}>
                <ExtendedInfoHeader>
                  <ExtendedInfoTitle>{title}</ExtendedInfoTitle>
                  <ExtendedInfoClose flip={flip} onClick={closePane}>
                    <CloseIcon color="#cc0000" />
                  </ExtendedInfoClose>
                </ExtendedInfoHeader>
                <Row2>
                  <ExtendInfoYear>
                    {release_date && new Date(release_date).getFullYear()}
                  </ExtendInfoYear>
                  <ExtendedInfoRating>
                    <MediaRating rating={vote_average || 0}></MediaRating>
                  </ExtendedInfoRating>
                </Row2>
                <Scrollbar autoHide autoFocus>
                  <ExtendedInfoOverview isBigScreen={isBigScreen}>
                    {overview}
                  </ExtendedInfoOverview>
                </Scrollbar>
              </CardExtendedInfo>
            </CardExtendedWrapper>
          )
      )}
    </div>
  );
};

export default CardExtended;
