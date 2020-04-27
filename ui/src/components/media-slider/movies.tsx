import React from "react";
import { CardSize } from "../../models/CardSize";
import Movie from "../../models/Movie";
import { MoviesContainer } from "./movies.style";
import Card from "../media-card/card";

export interface Movies {
  slider?: number;
  expandFull?: number;
  size: CardSize;
  columns: number;
  movies: Movie[];
  loadingCards: number[];
  handleSelection: (id: number) => void;
}

export default React.memo(
  ({
    slider,
    expandFull,
    size,
    columns,
    movies,
    loadingCards,
    handleSelection,
  }: Movies) => (
    <MoviesContainer
      slider={slider ? 1 : 0}
      expandFull={expandFull ? 1 : 0}
      size={CardSize.small}
      columns={columns}
    >
      {movies.map(
        (
          {
            id,
            poster_path,
            selected,
            title,
            release_date,
            vote_average,
            hide,
          },
          index
        ) =>
          !hide && (
            <Card
              poster_path={poster_path}
              selected={selected}
              key={`${id}-${release_date}`}
              onSelect={handleSelection}
              size={CardSize.small}
              id={id}
              title={title}
              release_date={release_date}
              vote_average={vote_average}
              index={index}
            />
          )
      )}
      {loadingCards.length &&
        loadingCards.map((val: number) => (
          <Card id={val} loadingCard={true} key={val} poster_path={""} />
        ))}
    </MoviesContainer>
  )
);
