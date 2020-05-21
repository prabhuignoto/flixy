import { CardSize } from "./CardSize";

export interface Poster {
  poster_path?: string;
  size?: CardSize;
  rating?: number;
  index?: number;
  title?: string;
  id?: number | string;
}