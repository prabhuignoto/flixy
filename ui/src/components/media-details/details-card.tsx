import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  DetailsPosterWrapper,
  CloseDetails,
  Overview,
  ReviewsWrapper,
  Box2,
  CastAndCrewWrapper
} from "./details-card.styles";
import Movie from "../../models/Movie";
import { CloseIcon } from "./../icons/index";
import DetailsTitle from "./title/details-title";
import { CastAndCrew } from "./details-cast-and-crew";
import Reviews from "../../containers/details/reviews";
import Loader from "../media-loader";
import { useSpring, config } from "react-spring";

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default 
  React.memo(({
    title,
    handleClose,
    id,
    overview,
    genres,
    runtime,
    release_date,
    isLoading,
    original_language,
    poster_path,
    vote_average,
    video,
  }: CardDetail) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    const props = useSpring({
      opacity: 1,
      from: {
        opacity: 0
      },
      delay: 200,
      config: config.gentle
    })

    return (
      <DetailsCardWrapper ref={wrapperRef} style={props}>
        {!isLoading ? (
          <>
            <DetailsWrapper>
              <DetailsTitle
                year={release_date}
                title={title}
                rating={vote_average}
                genres={genres}
                runtime={runtime}
                lang={original_language}
                releaseDate={release_date}
              ></DetailsTitle>
              <Overview>{overview}</Overview>
              
              <Box2>
                {/* <DetailsPosterWrapper>
                  <Poster poster_path={poster_path} size={CardSize.large} />
                </DetailsPosterWrapper> */}
                <CastAndCrewWrapper>
                  <CastAndCrew id={id} />
                </CastAndCrewWrapper>
              </Box2>
            </DetailsWrapper>
            <ReviewsWrapper>
              <Reviews movieId={id} />
            </ReviewsWrapper>
          </>
        ) : (
          <Loader />
        )}
        <CloseDetails onClick={handleClose}>
          <CloseIcon color="#fff"/>
        </CloseDetails>
      </DetailsCardWrapper>
    );
  }, (prev, current) => prev.id === current.id)
