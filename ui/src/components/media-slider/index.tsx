import * as React from "react";
import {
  Wrapper as WrapperContainer,
  Header,
  MoviesWrapper,
  Title,
  Footer,
  TitleIcon,
  TitleText,
  DetailsWrapper,
} from "./index.styles";
import Movies from "./collection";
import { Button } from "../commons/styles";
import { useSpring, config } from "react-spring";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";
import Slider from "../../models/Slider";
import Movie from "../../models/Movie";
import MovieDetails from "../../containers/details/movieDetails";

const SliderView: React.FunctionComponent<Slider> = ({
  movies,
  title,
  fetchMore,
  totalResults,
  loadingState,
  id
}: Slider) => {;
  const [expandFull, setExpandFull] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [showDetails, setShowDetails] = React.useState({
    state: false,
    selectedMovie: 0,
  });
  const [props, set] = useSpring(() => ({
    height: "280px",
    config: config.default,
    delay: 0
  }));

  const handleExpandFull = React.useCallback(() => setExpandFull(!expandFull), [
    expandFull,
  ]);
  
  React.useEffect(() => {
    if (!expandFull || showDetails.state) {
      set({
        height: "280px",
        from: {
          height: `${280 * 2}px`,
        }
      });
    } else {
      set({
        height: `${280 * 2}px`,
        from: {
          height: "280px"
        }
      });
    }
  }, [expandFull, showDetails]);

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
        setShowDetails({ state: true, selectedMovie: selectedMovie?.id || 0 });
      }
    },
    [showDetails]
  );

  const onDetailsClose = React.useCallback(
    () => setShowDetails({ state: false, selectedMovie: 0 }),
    []
  );

  return (
    <WrapperContainer expand={expandFull ? 1 : 0}>
      <Header>
        <Title>
          <TitleIcon></TitleIcon>
          <TitleText>{`${title}`}</TitleText>
        </Title>
      </Header>

      {/* movies list */}
      {
        <MoviesWrapper expand={expandFull ? 1 : 0} style={props}>
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

      {(
        <DetailsWrapper>
          <MovieDetails
            movieId={showDetails.selectedMovie}
            handleClose={onDetailsClose}
            hide={!showDetails.state}
          />
        </DetailsWrapper>
      )}

      {/* footer section */}
      {!showDetails.state && (
        <Footer>
          <Button size="medium" onClick={handleExpandFull}>
            {expandFull ? <ArrowUpIcon /> : <ArrowDownIcon />}
          </Button>
        </Footer>
      )}
    </WrapperContainer>
  );
};

export default SliderView;
