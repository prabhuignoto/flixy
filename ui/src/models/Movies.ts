import Movie from "./Movie";

export interface Movies {
  items: Movie[];
  slider?: number;
  expandFull?: number;
}