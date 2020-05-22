import React from "react";
import Movie from "../../models/Movie";
import {
  CardExtendedWrapper,
  CardExtendedPosterWrapper,
  CardExtendedPoster,
  CardExtendedInfo,
  ExtendedInfoTitle,
  ExtendInfoYear,
  ExtendedInfoOverview,
} from "./card-extended.styles";
import { useTransition, config } from "react-spring";
import useResponsive from "../../effects/useResponsive";
import { CloseIcon } from "../icons";

type Extended = Movie & {
  show?: boolean;
  onClick: (id: number) => void;
  flip: boolean;
  closePane?: () => void;
};

const CardExtended: React.FunctionComponent<Extended> = React.memo(
  ({ poster_path, show, title, release_date, onClick, id, overview, flip, closePane }) => {
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

    return (
      <div>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <CardExtendedWrapper
                style={props}
                key={key}
                flip={flip}
                isBigScreen={isBigScreen}
                onClick={() => onClick(id)}
                onMouseLeave={closePane}
              >
                <CardExtendedPosterWrapper flip={flip}>
                  <CardExtendedPoster
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  ></CardExtendedPoster>
                </CardExtendedPosterWrapper>
                <CardExtendedInfo flip={flip}>
                  <ExtendedInfoTitle>{title}</ExtendedInfoTitle>
                  <ExtendInfoYear>{release_date}</ExtendInfoYear>
                  <ExtendedInfoOverview>{overview}</ExtendedInfoOverview>
                </CardExtendedInfo>
              </CardExtendedWrapper>
            )
        )}
      </div>
    );
  },
  (prev, cur) => prev.id === cur.id && prev.show === cur.show
);

export default CardExtended;
