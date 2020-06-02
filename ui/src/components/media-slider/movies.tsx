import React from "react";
import { CardSize } from "../../models/CardSize";
import Movie from "../../models/Movie";
import { MoviesContainer } from "./movies.style";
import Card from "../media-card/card";
import useResponsive from "../../effects/useResponsive";
import withExtendedInfo, {
  CardExtendCustomModel,
} from "../HOCS/withExtendInfo";
import { PositioningStrategy } from "../media-card/card-extended";

const ExtendedCard = withExtendedInfo<CardExtendCustomModel>(Card);

export interface Movies {
  slider?: number;
  expandFull?: number;
  size: CardSize;
  columns: number;
  movies: Movie[];
  loadingCards: number[];
  handleSelection: (id: number | string) => void;
  id?: string;
}

export default ({
  slider,
  expandFull,
  size,
  columns,
  movies,
  loadingCards,
  handleSelection,
  id: containerId,
}: Movies) => {
  const responsiveProps = useResponsive();
  return (
    <MoviesContainer
      slider={slider ? 1 : 0}
      expandFull={expandFull ? 1 : 0}
      size={CardSize.small}
      columns={columns}
      resxProps={responsiveProps}
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
            overview,
            genres,
          },
          index
        ) =>
          !hide && (
            <ExtendedCard
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
              overview={overview}
              resxProps={responsiveProps}
              genres={genres}
              containerId={containerId}
              positioningStrategy={PositioningStrategy.absolute}
            />
          )
      )}
      {loadingCards && loadingCards.length
        ? loadingCards.map((val: number) => (
            <Card
              id={val}
              loadingCard={true}
              key={val}
              poster_path={""}
              resxProps={responsiveProps}
            />
          ))
        : null}
    </MoviesContainer>
  );
};
