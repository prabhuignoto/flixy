import React from "react";
import { Genre } from "../../models/Genre";
import { GenresWrapper, GenreItem } from "./genres-styles";

const Genres: React.FunctionComponent<{items?: Genre[]}> = ({items}) => (
  <GenresWrapper>
    { items && items.map(({ id, name }) => (
      <GenreItem key={id}>{name}</GenreItem>
    ))}
  </GenresWrapper>
);

export default Genres;
