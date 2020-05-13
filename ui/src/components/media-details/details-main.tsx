import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  CloseDetails,
  Overview,
  ReviewsWrapper,
  Box2,
  CastAndCrewWrapper,
  Box1,
  DetailsHome,
  RecommendedMoviesWrapper,
  RecommendedMoviesContainer,
  CastAndCrewContainer,
  PanelContainer,
} from "./details-main.styles";
import Movie from "../../models/Movie";
import { CloseIcon, MenuIcon } from "../icons/index";
import DetailsTitle from "./title/details-title";
import { CastAndCrew } from "./details-cast-and-crew";
import Reviews from "../../containers/details/reviews";
import Loader from "../media-loader";
import Recommended from "../../containers/movies/recommended";
import Similar from "../../containers/movies/similar";
import { tabs } from "./panel/panel";
import Panel from "./panel/panel";
import useResponsive from "../../effects/useResponsive";

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default ({
  title,
  handleClose,
  id,
  overview,
  genres,
  runtime,
  release_date,
  isLoading,
  original_language,
  vote_average,
}: CardDetail) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [show, setShow] = React.useState(false);
  const [mounted, setMounted] = React.useState(false);
  const [actvTab, setActvTab] = React.useState(tabs.home);
  const resxProps = useResponsive();

  React.useEffect(() => {
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (!mounted) {
      return;
    }
  }, [show]);

  const togglePanel = () => {
    setShow(!show);
  };

  const handleSelection = React.useCallback((selectedTab: tabs) => {
    setActvTab(selectedTab);
    togglePanel();
  }, []);

  return (
    <DetailsCardWrapper ref={wrapperRef}>
      {!isLoading && (
        <>
          <DetailsWrapper>
            {actvTab === tabs.home && (
              <DetailsHome>
                <Box1>
                  <DetailsTitle
                    year={release_date}
                    title={title}
                    rating={vote_average}
                    genres={genres}
                    runtime={runtime}
                    lang={original_language}
                    releaseDate={release_date}
                  ></DetailsTitle>
                </Box1>
                <Box2>
                  <Overview>{overview}</Overview>
                  <CastAndCrewWrapper resxProps={resxProps}>
                    <CastAndCrewContainer resxProps={resxProps}>
                      <CastAndCrew id={id} />
                    </CastAndCrewContainer>
                    {resxProps.isBigScreen && (
                      <ReviewsWrapper resxProps={resxProps}>
                        <Reviews movieId={id} />
                      </ReviewsWrapper>
                    )}
                  </CastAndCrewWrapper>
                </Box2>
              </DetailsHome>
            )}
            {actvTab === tabs.recommended && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <Recommended movieId={id} />
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.similar && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <Similar movieId={id} />
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.reviews && (
              <ReviewsWrapper resxProps={resxProps}>
                <Reviews movieId={id} />
              </ReviewsWrapper>
            )}
            <PanelContainer>
              <Panel onSelection={handleSelection} actvTab={actvTab} />
            </PanelContainer>
          </DetailsWrapper>
        </>
      )}
      <CloseDetails onClick={handleClose}>
        <CloseIcon color="#fff" />
      </CloseDetails>
    </DetailsCardWrapper>
  );
};
