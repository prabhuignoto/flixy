import React from "react";
import Movie from "../../models/Movie";
import {
  CardExtendedWrapper,
  CardExtendedPosterWrapper,
  CardExtendedPoster,
  CardExtendedInfo,
  ExtendedInfoTitle,
  ExtendInfoYear,
} from "./card-extended.styles";
import { useTransition, config } from "react-spring";

type Extended = Movie & { show?: boolean };

const CardExtended: React.FunctionComponent<Extended> = React.memo(
  ({ poster_path, show, title, release_date }) => {
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
      config: config.stiff,
      immediate: false,
    });

    return (
      <div>
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <CardExtendedWrapper style={props} key={key}>
                <CardExtendedPosterWrapper>
                  <CardExtendedPoster
                    src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
                  ></CardExtendedPoster>
                </CardExtendedPosterWrapper>
                <CardExtendedInfo>
                  <ExtendedInfoTitle>{title}</ExtendedInfoTitle>
                  <ExtendInfoYear>{release_date}</ExtendInfoYear>
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
