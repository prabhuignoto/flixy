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
import { config, useSpring, useTrail } from "react-spring";
import { LoadingState as State } from "../../models/Slider";

export enum NavDir {
  LEFT = "LEFT",
  RIGHT = "RIGHT",
}

export default ({
  items,
  slider,
  expandFull,
  fetchMore,
  totalResults,
  loadingState,
}: Movies) => {
  const [size] = React.useState(CardSize.small);
  const [movies, setMovies] = React.useState([] as Movie[]);
  const [page, setPage] = React.useState(1);
  const [actvStartIdx, setActvStartIdx] = React.useState(0);
  const [allItemsFetched, setAllItemsFetched] = React.useState(false);
  const [loadingCards, setLoadingCards] = React.useState([] as number[]);

  const moviesRef = React.useRef<HTMLDivElement>(null);
  const isFirstRun = React.useRef(true);
  const visibleItems = React.useRef(0);
  const clientWidth = React.useRef(0);

  const handleNav = (dir: NavDir) => {
    const moveForward = dir === NavDir.RIGHT && loadingState !== State.LOADING;
    const moveBackward = dir === NavDir.LEFT && page > 0;
    const itemsLen = items.length;

    const isFinalPage = itemsLen === totalResults && (itemsLen - actvStartIdx) < visibleItems.current;

    if (moveForward && !isFinalPage) {
      setPage(page + 1);
    } else if (moveBackward) {
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

    // hide elements to the left of the window
    for (let itr = 0; itr < itemsToHideLeft; itr++) {
      items[counter++].hide = true;
    }

    setActvStartIdx(counter);

    // show elements to be displayed in the window
    for (let itr = 0; itr < itemsToShow; itr++) {
      items[counter++].hide = false;
    }

    // hide all the elements to the right of the window
    for (let itr = counter; itr < items.length; itr++) {
      items[counter++].hide = true;
    }

    // check if we are in the last page
    const isLastPage = items.length - page * visibleElements < visibleElements;

    // load more elements if there is enough space in the window
    if (counter < visibleElements || isLastPage) {
      const loadingCards =
        visibleElements - (items.length - page * visibleElements);
      setLoadingCards(Array.from({ length: loadingCards }).map((k, i) => i));
      fetchMore();
    }

    setMovies(items);
  };

  const calcVisibleItems: (expand: boolean) => number = (expand) => {
    // get handle of the slider native element
    const nativeElement = moviesRef && (moviesRef.current as HTMLElement);
    if (nativeElement) {
      clientWidth.current = nativeElement.clientWidth;
      // calculate and store visible elements for the slider window
      const visibleElements = Math.floor(nativeElement.clientWidth / 216);
      visibleItems.current = expand ? visibleElements * 3 : visibleElements;

      return visibleItems.current;
    } else {
      return 0;
    }
  };

  // monitor page state
  React.useEffect(() => {
    if (isFirstRun.current) {
      calcVisibleItems(!!expandFull);
      isFirstRun.current = false;
    } else {
      const { current: count } = visibleItems;
      updateItems([...items], count, page);
    }
  }, [page]);

  // monitor the actual data
  React.useEffect(() => {
    if (items.length) {
      const { current: count } = visibleItems;
      if (items.length === totalResults) {
        setAllItemsFetched(true);
      }
      updateItems(items, count, page);
    }
  }, [items]);

  // monitor expand/collapse
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

  React.useEffect(() => {
    if (loadingState === State.LOADED || loadingState === State.FAILED) {
      setLoadingCards([]);
    }
  }, [loadingState]);

  return (
    <MoviesWrapper ref={moviesRef}>
      <ScrollLeft onClick={() => handleNav(NavDir.LEFT)}>
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
                key={`${id}-${title}`}
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
        {loadingCards.length &&
          loadingCards.map((val: number) => (
            <Card id={val} loadingCard={true} />
          ))}
      </MoviesContainer>
      <ScrollRight onClick={() => handleNav(NavDir.RIGHT)}>
        <ChevronRightIcon />
      </ScrollRight>
    </MoviesWrapper>
  );
};
