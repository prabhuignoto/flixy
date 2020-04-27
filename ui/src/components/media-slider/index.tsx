import * as React from "react";
import {
  Wrapper as WrapperContainer,
  Header,
  MoviesWrapper,
  Title,
  Footer,
  TitleIcon,
  TitleText,
  DetailsWrapper
} from "./index.styles";
import Movies from "./collection";
import { Button } from "../commons/styles";
import { useSpring } from "react-spring";
import { ArrowDownIcon, ArrowUpIcon } from "../icons";
import Slider from "../../models/Slider";
import DetailsCard from "../media-details/details-card";
import Movie from "../../models/Movie";

const SliderView: React.FunctionComponent<Slider> = ({
  movies,
  title,
  fetchMore,
  totalResults,
  loadingState,
}: Slider) => {
  const [expandFull, setExpandFull] = React.useState(false);
  const [page, setPage] = React.useState(1);
  const [showDetails, setShowDetails] = React.useState(false);
  const [selectedMovie, setSelectedMovie] = React.useState({} as Movie);
  const [props, set] = useSpring(() => ({
    height: "320px",
    opacity: 1,
  }));

  const handleExpandFull = () => setExpandFull(!expandFull);

  React.useEffect(() => {
    if (!expandFull || showDetails) {
      set({
        height: "320px",
        opacity: 1,
      });
    } else {
      set({
        height: `${320 * 3}px`,
        opacity: 1,
      });
    }
  }, [expandFull, showDetails]);

  const handleLoadMore = () => {
    if (fetchMore) {
      fetchMore(page + 1);
    }
    setPage(page + 1);
  };

  const handleMovieSelection = (selectedMovie?: Movie, clear?: boolean) => {
    if (clear) {
      setShowDetails(false);
      // setSelectedMovie({ id: 0 } as Movie);
    } else {
      setShowDetails(true);
      selectedMovie && setSelectedMovie(selectedMovie);
    }
  };

  const onDetailsClose = () => setShowDetails(false);

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
            showDetails={showDetails}
            selectedIndex={selectedMovie && selectedMovie.id}
          ></Movies>
        </MoviesWrapper>
      }

      {showDetails && (
        <DetailsWrapper>
          <DetailsCard
            title={selectedMovie?.title}
            poster_path={selectedMovie?.poster_path}
            id={selectedMovie?.id}
            handleClose={onDetailsClose}
          />
        </DetailsWrapper>
      )}

      {/* footer section */}
      {!showDetails && (
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
