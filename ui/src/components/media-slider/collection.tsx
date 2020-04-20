import * as React from "react";
import Card from "../media-card";
import {
  MoviesContainer,
  ScrollLeft,
  ScrollRight,
  MoviesWrapper,
} from "./collection.style";
import { CardSize } from "../../models/CardSize";
import { Movies } from "../../models/Movies";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import Movie from "./../../models/Movie";

export enum ScrollDir {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export default ({
  items,
  slider,
  expandFull,
  fetchMore,
  totalResults,
}: Movies) => {
  const [size] = React.useState(CardSize.small);
  const [movies, setMovies] = React.useState([] as Movie[]);
  const [page, setPage] = React.useState(1);
  const [actvStartIdx, setActvStartIdx] = React.useState(0);
  const [allItemsFetched, setAllItemsFetched] = React.useState(false);

  const moviesRef = React.useRef<HTMLDivElement>(null);
  const isFirstRun = React.useRef(true);
  const visibleItems = React.useRef(0);

  const handleScroll = (dir: ScrollDir) => {
    if (dir === ScrollDir.RIGHT) {
      setPage(page + 1);
    } else if (dir === ScrollDir.LEFT && page > 0) {
      setPage(page - 1);
    }
  };

  const updateItems = (
    items: Movie[],
    visibleElements: number,
    page: number
  ) => {
    let counter = 0;

    // calculate the items to be hidden on the left side of the window
    const itemsToHideLeft = page * visibleElements;

    // calc all the remaining elements
    const remainingElements = items.length - itemsToHideLeft;

    // calc the items to be shown in the window
    const itemsToShow =
      remainingElements >= visibleElements
        ? visibleElements
        : remainingElements;

    for (let itr = 0; itr < itemsToHideLeft; itr++) {
      items[counter++].hide = true;
    }

    setActvStartIdx(counter);

    for (let itr = 0; itr < itemsToShow; itr++) {
      items[counter++].hide = false;
    }

    for (let itr = counter; itr < items.length; itr++) {
      items[counter++].hide = true;
    }

    if (counter < visibleElements) {
      fetchMore();
    }

    const isLastPage = items.length - page * visibleElements <= visibleElements;

    if (isLastPage) {
      fetchMore();
    }

    setMovies(items);
  };

  const calcVisibleItems: (expand: boolean) => number = (expand) => {
    // get handle of the slider native element
    const nativeElement = moviesRef && (moviesRef.current as HTMLElement);
    if (nativeElement) {
      // calculate and store visible elements for the slider window
      const visibleElements = Math.floor(nativeElement.clientWidth / 225);
      visibleItems.current = expand ? visibleElements * 3 : visibleElements;

      return visibleItems.current;
    } else {
      return 0;
    }
  };

  React.useEffect(() => {
    if (isFirstRun.current) {
      calcVisibleItems(!!expandFull);
      isFirstRun.current = false;
    } else {
      const { current: count } = visibleItems;
      updateItems([...items], count, page);
    }
  }, [page]);

  React.useEffect(() => {
    const { current: count } = visibleItems;
    if (items.length === totalResults) {
      setAllItemsFetched(true);
    }
    updateItems(items, count, page);
  }, [items]);

  React.useEffect(() => {
    const visibleElements = calcVisibleItems(!!expandFull);
    if (expandFull) {
      if (actvStartIdx < visibleElements) {
        setPage(0);
      } else {
        setPage(Math.floor(actvStartIdx / visibleElements));
      }
    } else if (actvStartIdx > 0) {
      setPage(Math.floor(actvStartIdx / visibleElements));
    }
  }, [expandFull]);

  return (
    <MoviesWrapper ref={moviesRef}>
      <ScrollLeft onClick={() => handleScroll(ScrollDir.LEFT)}>
        <ChevronLeftIcon />
      </ScrollLeft>
      <MoviesContainer
        slider={slider ? 1 : 0}
        expandFull={expandFull ? 1 : 0}
        size={size}
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
                key={`${id}`}
                onSelect={() => {}}
                size={size}
                id={id}
                title={title}
                release_date={release_date}
                vote_average={vote_average}
                index={index}
              />
            )
        )}
      </MoviesContainer>
      <ScrollRight onClick={() => handleScroll(ScrollDir.RIGHT)}>
        <ChevronRightIcon />
      </ScrollRight>
    </MoviesWrapper>
  );
};
