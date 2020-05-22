import * as React from "react";
import {
  Wrapper as WrapperContainer,
  Header,
  MoviesWrapper,
  Footer,
  TitleIcon,
  TitleText,
  DetailsWrapper,
  Title,
} from "./index.styles";
import Movies from "./collection";
import { Button } from "../commons/styles";
import { useSpring, config } from "react-spring";
import { ArrowHeadDownIcon, ArrowHeadUpIcon } from "../icons";
import Slider from "../../models/Slider";
import Movie from "../../models/Movie";
import useResponsive, { responsiveProps } from "../../effects/useResponsive";
import memoize from "memoize-one";
import Loader from "../media-loader";

const MovieDetails = React.lazy(() =>
  import("../../containers/details/movieDetails")
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
}: Slider) => {
  const [expandFull, setExpandFull] = React.useState(false);
  const firstRun = React.useRef(true);
  const [page, setPage] = React.useState(1);
  const [showDetails, setShowDetails] = React.useState({
    state: false,
    selectedMovie: 0,
  });
  const resxProps = useResponsive();
  const [props, setProps] = useSpring(() => ({
    height: `${getHeight(resxProps)}px`,
    config: config.default,
    delay: 0,
  }));

  const handleExpandFull = React.useCallback(() => setExpandFull(!expandFull), [
    expandFull,
  ]);

  const boot = (
    expandFull: boolean,
    showDetails: {
      state: boolean;
      selectedMovie: number;
    }
  ) => {
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
  };

  React.useEffect(() => {
    boot(expandFull, showDetails);
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
    <WrapperContainer detailsEnabled={showDetails.selectedMovie ? 1 : 0}>
      <Header>
        <Title>
          <TitleIcon></TitleIcon>
          <TitleText>{`${title}`}</TitleText>
        </Title>
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
            selectedIndex={showDetails.selectedMovie}
            id={id}
          ></Movies>
        </MoviesWrapper>
      }

      {
        <DetailsWrapper>
          <React.Suspense fallback={<div></div>}>
            <MovieDetails
              movieId={showDetails.selectedMovie}
              handleClose={onDetailsClose}
              hide={!showDetails.state}
            />
          </React.Suspense>
        </DetailsWrapper>
      }

      {/* footer section */}
      {!showDetails.state && (
        <Footer>
          <Button size="medium" onClick={handleExpandFull}>
            {expandFull ? (
              <ArrowHeadUpIcon color="#cc0000" />
            ) : (
              <ArrowHeadDownIcon color="#cc0000" />
            )}
          </Button>
        </Footer>
      )}
    </WrapperContainer>
  );
};

export default SliderView;
