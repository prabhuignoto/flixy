export enum Category {
  POPULAR = "POPULAR",
  TOP_RATED = "TOP_RATED",
  UP_COMING = "UP_COMING",
}

export interface MediaContainer {
  category: Category;
  title: string;
}

export interface SearchContainer {
  query: string;
  type: MediaType;
}

export enum MediaType {
  MOVIES = "MOVIES",
  TV = "TV",
}

export enum RelatedMediaType {
  SIMILAR = "SIMILAR",
  RECOMMENDED = "RECOMMENDED",
}