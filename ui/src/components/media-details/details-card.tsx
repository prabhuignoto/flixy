import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
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

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default 
  ({
    title,
    handleClose,
    id,
    overview,
    genres,
    runtime,
    release_date,
    isLoading,
    original_language,
    vote_average
  }: CardDetail) => {
    const wrapperRef = React.useRef<HTMLDivElement>(null);

    return (
      <DetailsCardWrapper ref={wrapperRef}>
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
  };
