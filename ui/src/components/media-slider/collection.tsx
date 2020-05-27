import * as React from "react";
import ReactDOM from "react-dom";
import { ScrollLeft, ScrollRight, MoviesWrapper } from "./collection.style";
import { CardSize } from "../../models/CardSize";
import { Movies as MoviesModel } from "../../models/Movies";
import { ChevronLeftIcon, ChevronRightIcon } from "../icons";
import Movie from "./../../models/Movie";
import { LoadingState as State } from "../../models/Slider";
import useVirtual from "./../../effects/useVirtual";
import { Configs } from "./../../effects/useVirtual";
import MoviesView from "./movies";
import useResponsive from "../../effects/useResponsive";

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
  id,
}: MoviesModel) => {
  const [movies, setMovies] = React.useState([] as Movie[]);
  const [page, setPage] = React.useState(1);
  const [actvStartIdx, setActvStartIdx] = React.useState(0);
  const [loadingCards, setLoadingCards] = React.useState([] as number[]);
  const [visibleColumns, setVisibleColumns] = React.useState(0);
  const [lazyConfig, setLazyInputs] = useVirtual();
  const [mounted, setMounted] = React.useState(false);
  const resxProps = useResponsive();

  const moviesRef = React.useRef<HTMLDivElement>(null);
  const visibleItems = React.useRef(0);
  const scrollButtonsPortal = document.getElementById(`slider-wrapper-${id}`);

  const handleNav = (dir: NavDir) => {
    const moveForward = dir === NavDir.RIGHT && loadingState !== State.LOADING;
    const moveBackward = dir === NavDir.LEFT && page > 1;
    const itemsLen = items.length;

    const isFinalPage =
      itemsLen === totalResults &&
      itemsLen - actvStartIdx < visibleItems.current;

    const columns =
      expandFull && !showDetails ? visibleColumns * 2 : visibleColumns;
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

  // run it the first time
  React.useEffect(() => {
    const nativeElement = moviesRef.current;
    if (nativeElement) {
      const clientWidth = nativeElement.clientWidth;
      let colWidth = 200;
      if (resxProps) {
        const { isBigScreen, isDesktopOrLaptop, isTabletOrMobile } = resxProps;

        if (isTabletOrMobile) {
          colWidth = 130;
        } else if (isDesktopOrLaptop && !isBigScreen) {
          colWidth = 150;
        }
      }
      const columns = Math.floor(clientWidth / colWidth);
      setVisibleColumns(columns);
      visibleItems.current = expandFull && !showDetails ? columns * 2 : columns;
    }
    setMounted(true);
  }, []);

  React.useEffect(() => {
    if (mounted) {
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
    }
  }, [lazyConfig]);

  // monitor the actual data
  React.useEffect(() => {
    if (mounted) {
      if (items.length) {
        const nativeElement = moviesRef.current;
        if (nativeElement) {
          const clientWidth = nativeElement.clientWidth;
          let colWidth = 200;
          if (resxProps) {
            const {
              isBigScreen,
              isDesktopOrLaptop,
              isTabletOrMobile,
            } = resxProps;

            if (isTabletOrMobile) {
              colWidth = 130;
            } else if (isDesktopOrLaptop && !isBigScreen) {
              colWidth = 150;
            }
          }

          const cols = Math.floor(clientWidth / colWidth);
          const columns = expandFull && !showDetails ? cols * 2 : cols;
          setLazyInputs({
            visibleElements: columns,
            page,
            totalItems: items.length,
          });
        }
      }
    }
  }, [items]);

  // monitor expand/collapse
  React.useEffect(() => {
    if (mounted) {
      let newPage = null;
      const columns =
        expandFull && !showDetails ? visibleColumns * 2 : visibleColumns;

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
    if (mounted) {
      if (loadingState === State.LOADED || loadingState === State.FAILED) {
        setLoadingCards([]);
      }
    }
  }, [loadingState]);

  const handleSelection = (id: number | string) => {
    // make a quick copy
    const newMovies = [...movies];

    // get to be selected item
    const newSelection = newMovies.find((movie) => movie.id === id);

    onSelection(newSelection);
  };

  return (
    <MoviesWrapper ref={moviesRef}>
      {scrollButtonsPortal &&
        ReactDOM.createPortal(
          <ScrollLeft
            onClick={() => handleNav(NavDir.LEFT)}
            loading={loadingState === State.LOADING}
            resxProps={resxProps}
          >
            <ChevronLeftIcon />
          </ScrollLeft>,
          scrollButtonsPortal
        )}
      {scrollButtonsPortal &&
        ReactDOM.createPortal(
          <ScrollRight
            onClick={() => handleNav(NavDir.RIGHT)}
            loading={loadingState === State.LOADING}
            resxProps={resxProps}
          >
            <ChevronRightIcon />
          </ScrollRight>,
          scrollButtonsPortal
        )}
      {movies && movies.length ? (
        <MoviesView
          slider={slider}
          expandFull={expandFull}
          size={CardSize.small}
          columns={visibleColumns}
          movies={movies}
          handleSelection={handleSelection}
          loadingCards={loadingCards}
          id={id}
        />
      ) : null}
    </MoviesWrapper>
  );
};
