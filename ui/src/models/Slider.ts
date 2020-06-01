import Movie from "./Movie";

export enum LoadingState {
  LOADING = "LOADING",
  LOADED = "LOADED",
  FAILED = "FAILED",
  DEFAULT = "DEFAULT"
};

export default interface Slider {
  movies: Movie[];
  title: string;
  titleIcon?: string;
  fetchMore?: (page: number) => void;
  totalResults: number;
  loadingState?: LoadingState;
  id?: string;
  sliderType?: SliderType;
}

export enum SliderType {
  movies = "movies",
  tv = "tv"
}