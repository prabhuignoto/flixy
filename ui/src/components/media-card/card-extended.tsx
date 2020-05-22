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
  ExtendedInfoClose,
} from "./card-extended.styles";
import { useTransition, config } from "react-spring";
import useResponsive from "../../effects/useResponsive";
import { CloseIcon } from "../icons";

type Extended = Movie & {
  show?: boolean;
  onClick: (id: number) => void;
  flip: boolean;
  closePane?: (
    ev: React.MouseEvent<HTMLDivElement> & React.FocusEvent<HTMLDivElement>
  ) => void;
};

const CardExtended: React.FunctionComponent<Extended> = React.memo(
  ({
    poster_path,
    show,
    title,
    release_date,
    onClick,
    id,
    overview,
    flip,
    closePane,
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
      if(show) {
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
                onClick={() => onClick(id)}
                onBlur={closePane}
                ref={ref}
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
                <ExtendedInfoClose flip={flip} onClick={closePane}>
                  <CloseIcon color="#cc0000" />
                </ExtendedInfoClose>
              </CardExtendedWrapper>
            )
        )}
      </div>
    );
  },
  (prev, cur) => prev.id === cur.id && prev.show === cur.show
);

export default CardExtended;
