import * as React from "react";
import { ScrollLeft, ScrollRight, MoviesWrapper } from "./collection.style";
import { CardSize } from "../../models/CardSize";
import { Movies as MoviesModel } from "../../models/Movies";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import Movie from "./../../models/Movie";
import { LoadingState as State } from "../../models/Slider";
import useVirtual from "./../../effects/useVirtual";
import { Configs } from "./../../effects/useVirtual";
import MoviesView from "./movies";

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
  onSelection,
  showDetails,
  selectedIndex,
}: MoviesModel) => {
  const [movies, setMovies] = React.useState([] as Movie[]);
  const [page, setPage] = React.useState(1);
  const [actvStartIdx, setActvStartIdx] = React.useState(0);
  const [loadingCards, setLoadingCards] = React.useState([] as number[]);
  const [visibleColumns, setVisibleColumns] = React.useState(0);
  const [lazyConfig, setLazyInputs] = useVirtual();

  const moviesRef = React.useRef<HTMLDivElement>(null);
  const isFirstRun = React.useRef(true);
  const visibleItems = React.useRef(0);

  const handleNav = (dir: NavDir) => {
    const moveForward = dir === NavDir.RIGHT && loadingState !== State.LOADING;
    const moveBackward = dir === NavDir.LEFT && page > 1;
    const itemsLen = items.length;

    const isFinalPage =
      itemsLen === totalResults &&
      itemsLen - actvStartIdx < visibleItems.current;

    const columns =
      expandFull && !showDetails ? visibleColumns * 3 : visibleColumns;
    let newPage = 0;

    if (moveForward && !isFinalPage) {
      newPage = page + 1;
    } else if (moveBackward) {
      newPage = page - 1;
    }

    setPage(newPage);
    setLazyInputs({
      visibleElements: columns,
      page: newPage,
      totalItems: items.length,
    });
  };

  React.useEffect(() => {
    const {
      itemsToShow,
      itemsToHideLeft,
      shouldLoadMore,
      visibleElements,
    } = lazyConfig as Configs;
    if (visibleElements) {
      let counter = 0;
      const newItems = [...items];

      // hide elements to the left of the window
      for (let itr = 0; itr < itemsToHideLeft; itr++) {
        newItems[counter++].hide = true;
      }

      setActvStartIdx(counter);

      // show elements to be displayed in the window
      for (let itr = 0; itr < itemsToShow; itr++) {
        newItems[counter++].hide = false;
      }

      // hide all the elements to the right of the window
      for (let itr = counter; itr < newItems.length; itr++) {
        newItems[counter++].hide = true;
      }

      if (shouldLoadMore) {
        const cards = Math.abs(newItems.length - page * visibleElements);
        setLoadingCards(Array.from({ length: cards }).map((k, i) => i));
        setTimeout(() => fetchMore(), 0);
      }

      setMovies(newItems);
    }
  }, [lazyConfig]);

  // run it the first time
  React.useEffect(() => {
    const nativeElement = moviesRef.current;
    if (nativeElement) {
      const clientWidth = nativeElement.clientWidth;
      const columns = Math.floor(clientWidth / 200);
      setVisibleColumns(columns);
      visibleItems.current = expandFull && !showDetails ? columns * 3 : columns;
    }
  }, []);

  // monitor the actual data
  React.useEffect(() => {
    if (items.length) {
      const nativeElement = moviesRef.current;
      if (nativeElement) {
        const clientWidth = nativeElement.clientWidth;
        const cols = Math.floor(clientWidth / 200);
        const columns = expandFull && !showDetails ? cols * 3 : cols;
        setLazyInputs({
          visibleElements: columns,
          page,
          totalItems: items.length,
        });
      }
    }
  }, [items]);

  // monitor expand/collapse
  React.useEffect(() => {
    if (isFirstRun.current) {
      isFirstRun.current = false;
    } else {
      let newPage = null;
      const columns =
        expandFull && !showDetails ? visibleColumns * 3 : visibleColumns;

      if (!showDetails) {
        if (actvStartIdx > 0) {
          newPage = Math.ceil((actvStartIdx + 1) / columns);
          newPage = newPage ? newPage : 1;
        } else {
          newPage = 1;
        }
        setLazyInputs({
          visibleElements: columns,
          page: newPage,
          totalItems: items.length,
        });
      } else {
        const itemIndex = movies.findIndex((m) => m.id === selectedIndex);
        newPage = Math.ceil((itemIndex + 1) / columns);
        setLazyInputs({
          visibleElements: columns,
          page: newPage,
          totalItems: items.length,
        });
      }
      setPage(newPage);
    }
  }, [expandFull, showDetails]);

  React.useEffect(() => {
    if (loadingState === State.LOADED || loadingState === State.FAILED) {
      setLoadingCards([]);
    }
  }, [loadingState]);

  const handleSelection = (id: number) => {
    // make a quick copy
    const newMovies = [...movies];

    // get to be selected item
    const newSelection = newMovies.find((movie) => movie.id === id);

    onSelection(newSelection);
  };

  return (
    <MoviesWrapper ref={moviesRef}>
      <ScrollLeft
        onClick={() => handleNav(NavDir.LEFT)}
        loading={loadingState === State.LOADING}
      >
        <ChevronLeftIcon />
      </ScrollLeft>
      <MoviesView
        slider={slider}
        expandFull={expandFull}
        size={CardSize.small}
        columns={visibleColumns}
        movies={movies}
        handleSelection={handleSelection}
        loadingCards={loadingCards}
      />
      <ScrollRight
        onClick={() => handleNav(NavDir.RIGHT)}
        loading={loadingState === State.LOADING}
      >
        <ChevronRightIcon />
      </ScrollRight>
    </MoviesWrapper>
  );
};
