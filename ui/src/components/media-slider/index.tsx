import * as React from "react";
import {
  Wrapper as WrapperContainer,
  Header,
  MoviesWrapper,
  Footer,
  DetailsWrapper,
  Title,
} from "./index.styles";
import Movies from "./collection";
import { Button } from "../commons/styles";
import { useSpring, config } from "react-spring";
import { CaretDownIcon, CaretUpIcon } from "../icons";
import Slider, { SliderType, LoadingState } from "../../models/Slider";
import Movie from "../../models/Media";
import useResponsive, { responsiveProps } from "../../effects/useResponsive";
import memoize from "memoize-one";

const MovieDetails = React.lazy(() =>
  import("../../containers/details/movieDetails")
);

const TvDetails = React.lazy(() =>
  import("../../containers/details/tvDetails")
);

const getHeight = memoize((props: responsiveProps) => {
  if (props.isBigScreen) {
    return 280;
  } else if (props.isDesktopOrLaptop) {
    return 220;
  } else if (props.isTabletOrMobile) {
    return 200;
  } else {
    return 220;
  }
});

const SliderView: React.FunctionComponent<Slider> = ({
  movies,
  title,
  fetchMore,
  totalResults,
  loadingState,
  id,
  sliderType,
}: Slider) => {
  const [expandFull, setExpandFull] = React.useState(false);
  const firstRun = React.useRef(true);
  const [page, setPage] = React.useState(1);
  const [showDetails, setShowDetails] = React.useState<{
    state: boolean;
    selectedMovie: number | string;
  }>({
    state: false,
    selectedMovie: 0,
  });
  const resxProps = useResponsive();

  const [props, setProps] = useSpring(() => ({
    height: `${getHeight(resxProps)}px`,
    config: config.default,
    delay: 0,
  }));

  const wrapperProps = useSpring({
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.stiff,
  });

  const handleExpandFull = React.useCallback(() => setExpandFull(!expandFull), [
    expandFull,
  ]);

  React.useEffect(() => {
    if (firstRun.current) {
      firstRun.current = false;
    } else {
      const height = getHeight(resxProps);
      if (!expandFull || showDetails.state) {
        setProps({
          height: `${height}px`,
          from: {
            height: `${height * 2}px`,
          },
        });
      } else {
        setProps({
          height: `${height * 2}px`,
          from: {
            height: `${height}px`,
          },
        });
      }
    }
  }, [expandFull, showDetails, firstRun]);

  const handleLoadMore = React.useCallback(() => {
    if (fetchMore) {
      fetchMore(page + 1);
    }
    setPage(page + 1);
  }, [fetchMore, page]);

  const handleMovieSelection = React.useCallback(
    (selectedMovie?: Movie, clear?: boolean) => {
      if (clear) {
        setShowDetails({ state: false, selectedMovie: 0 });
      } else {
        setShowDetails({
          state: true,
          selectedMovie: selectedMovie?.id || 0,
        });
      }
    },
    []
  );

  const onDetailsClose = React.useCallback(
    () => setShowDetails({ state: false, selectedMovie: 0 }),
    []
  );

  return (
    <WrapperContainer
      detailsEnabled={showDetails.selectedMovie ? 1 : 0}
      id={`slider-wrapper-${id}`}
    >
      <div id={`extended-card-enclosure-${id}`}></div>

      <Header>
        <Title>{title}</Title>
      </Header>

      {/* movies list */}
      {
        <MoviesWrapper style={props}>
          <Movies
            items={movies}
            slider={!expandFull ? 1 : 0}
            expandFull={expandFull ? 1 : 0}
            fetchMore={handleLoadMore}
            totalResults={totalResults}
            loadingState={loadingState}
            onSelection={handleMovieSelection}
            showDetails={showDetails.state}
            selectedIndex={showDetails.selectedMovie as number}
            id={id}
          ></Movies>
        </MoviesWrapper>
      }

      {(
        <DetailsWrapper>
          <React.Suspense fallback={<div></div>}>
            {sliderType === SliderType.movies ? (
              <MovieDetails
                movieId={showDetails.selectedMovie}
                handleClose={onDetailsClose}
                hide={!showDetails.state}
              />
            ) : (
              <TvDetails
                movieId={showDetails.selectedMovie}
                handleClose={onDetailsClose}
                hide={!showDetails.state}
              />
            )}
          </React.Suspense>
        </DetailsWrapper>
      )}

      {/* footer section */}
      {!showDetails.state && (
        <Footer>
          <Button size="medium" onClick={handleExpandFull}>
            {expandFull ? (
              <CaretUpIcon color="#cc0000" />
            ) : (
              <CaretDownIcon color="#cc0000" />
            )}
          </Button>
        </Footer>
      )}
    </WrapperContainer>
  );
};

export default SliderView;
