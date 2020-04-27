import Movie from "./Movie";
import { LoadingState } from "./Slider";

export interface Movies {
  items: Movie[];
  slider?: number;
  expandFull?: number;
  fetchMore: () => void;
  totalResults: number;
  loadingState: LoadingState;
  onSelection: (selectedMovie?: Movie, clear?: boolean) => void;
  showDetails: boolean;
  selectedIndex: number | null;
}