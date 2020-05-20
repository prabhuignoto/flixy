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
  PostersWrapper,
} from "./details-main.styles";
import Movie from "../../models/Movie";
import { CloseIcon, MenuIcon } from "../icons/index";
import DetailsTitle from "./title/details-title";
import { CastAndCrew } from "./details-cast-and-crew";
import { tabs } from "./panel/panel";
import Panel from "./panel/panel";
import useResponsive from "../../effects/useResponsive";
import Images from "../../containers/details/images";
import Loader from "../media-loader";

const Reviews = React.lazy(() => import("../../containers/details/reviews"));
const Recommended = React.lazy(() =>
  import("../../containers/movies/recommended")
);
const Similar = React.lazy(() => import("../../containers/movies/similar"));

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
                  <Overview resxProps={resxProps}>{overview}</Overview>
                  <CastAndCrewWrapper resxProps={resxProps}>
                    <CastAndCrewContainer resxProps={resxProps}>
                      <CastAndCrew id={id} />
                    </CastAndCrewContainer>
                    {resxProps.isBigScreen && (
                      <PostersWrapper resxProps={resxProps}>
                        <Images movieId={id} />
                      </PostersWrapper>
                    )}
                  </CastAndCrewWrapper>
                </Box2>
              </DetailsHome>
            )}
            {actvTab === tabs.recommended && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <React.Suspense fallback={<Loader />}>
                    <Recommended movieId={id} />
                  </React.Suspense>
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.similar && (
              <RecommendedMoviesWrapper>
                <RecommendedMoviesContainer>
                  <React.Suspense fallback={<Loader />}>
                    <Similar movieId={id} />
                  </React.Suspense>
                </RecommendedMoviesContainer>
              </RecommendedMoviesWrapper>
            )}
            {actvTab === tabs.posters && (
              <ReviewsWrapper resxProps={resxProps}>
                <Images movieId={id} />
              </ReviewsWrapper>
            )}
            {actvTab === tabs.reviews && (
              <ReviewsWrapper resxProps={resxProps}>
                <React.Suspense fallback={<Loader />}>
                  <Reviews movieId={id} />
                </React.Suspense>
              </ReviewsWrapper>
            )}
            <PanelContainer>
              <Panel onSelection={handleSelection} actvTab={actvTab} />
            </PanelContainer>
          </DetailsWrapper>
        </>
      )}
      <CloseDetails onClick={handleClose} resxProps={resxProps}>
        <CloseIcon color="#fff" />
      </CloseDetails>
    </DetailsCardWrapper>
  );
};
