import * as React from "react";
import Card from "../media-card";
import {
  MoviesContainer,
  ScrollLeft,
  ScrollRight,
  MoviesWrapper,
} from "./collection.style";
import { CardSize } from "../../models/CardSize";
import { Movies } from "../../models/Movies";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";

export default ({ items, slider, expandFull }: Movies) => {
  // local states
  const [movies, setMovies] = React.useState(
    items.map((item) => Object.assign({}, item, { selected: false }))
  );
  const [size] = React.useState(CardSize.small);
  const moviesRef = React.useRef<HTMLDivElement>(null);

  // action handlers
  const handleSelect = (id: number) => {
    const newMovies = movies.map((movie) =>
      Object.assign({}, movie, {
        selected: movie.id !== id ? false : !movie.selected,
      })
    );
    setMovies(newMovies);
  };

  const handleScrollLeft = () => {
    if (moviesRef && moviesRef.current) {
      moviesRef.current.scrollLeft -= 350;
    }
  };

  const handleScrollRight = () => {
    if (moviesRef && moviesRef.current) {
      moviesRef.current.scrollLeft += 350;
    }
  };

  return (
    <MoviesWrapper>
      <ScrollLeft onClick={handleScrollLeft}>
        <ChevronLeftIcon />
      </ScrollLeft>
      <MoviesContainer
        slider={slider ? 1 : 0}
        expandFull={expandFull ? 1 : 0}
        size={size}
        ref={moviesRef}
      >
        {movies.map(
          ({
            id,
            poster_path,
            selected,
            title,
            release_date,
            vote_average,
          }) => (
            <Card
              poster_path={poster_path}
              selected={selected}
              key={id}
              onSelect={handleSelect}
              size={size}
              id={id}
              title={title}
              release_date={release_date}
              vote_average={vote_average}
            />
          )
        )}
      </MoviesContainer>
      <ScrollRight onClick={handleScrollRight}>
        <ChevronRightIcon />
      </ScrollRight>
    </MoviesWrapper>
  );
};
