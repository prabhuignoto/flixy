import React from "react";
import { Genre } from "../../models/Genre";
import { GenresWrapper, GenreItem } from "./genres-styles";

export enum GenreSize {
  small = "SMALL",
  large = "LARGE"
}

const Genres: React.FunctionComponent<{items?: Genre[], size?: GenreSize}> = ({items, size}) => (
  <GenresWrapper>
    { items && items.map(({ id, name }) => (
      <GenreItem key={id} size={size}>{name}</GenreItem>
    ))}
  </GenresWrapper>
);

export default Genres;
