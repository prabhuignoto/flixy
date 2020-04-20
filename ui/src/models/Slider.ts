import Movie from "./Movie";

export default interface Slider {
  movies: Movie[];
  title: string;
  titleIcon?: string;
  fetchMoreQueryEntry?: string;
  fetchMore?: (page: number) => void;
  totalResults: number;
}