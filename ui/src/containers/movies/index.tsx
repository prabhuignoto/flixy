import * as React from "react";
import { useApolloClient, DocumentNode } from "@apollo/client";
import Slider from "../../components/media-slider";
import { popular, topRated, upcoming } from "../../gqls/movies";
import Movie from "./../../models/Movie";
import { LoadingState, SliderType } from "../../models/Slider";
import { nanoid } from "nanoid";

export enum Category {
  POPULAR = "POPULAR",
  TOP_RATED = "TOP_RATED",
  UP_COMING = "UP_COMING",
}

export interface MediaContainer {
  category: Category;
  title: string;
}

const getQuery: (c: Category) => DocumentNode = (category) => {
  switch (category) {
    case Category.POPULAR:
      return popular;
    case Category.TOP_RATED:
      return topRated;
    case Category.UP_COMING:
      return upcoming;
  }
};

const TopRated: React.FunctionComponent<MediaContainer> = ({
  category,
  title,
}) => {
  const client = useApolloClient();
  const [movieData, setMovieData] = React.useState<{
    results: Movie[];
    total_results?: number;
  }>({
    results: [],
    total_results: 0,
  });
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    getMovies(1);
  }, []);

  const getMovies = async (page: number) => {
    setLoading(true);
    const { data } = await client.query({
      query: getQuery(category),
      variables: {
        lang: "en-US",
        page,
      },
      fetchPolicy: "cache-first",
    });

    if (data) {
      let newData = [] as Movie[];
      if (movieData.results) {
        let newResults = [];
        if (category === Category.POPULAR) {
          newResults = data.getPopular;
        } else if (category === Category.TOP_RATED) {
          newResults = data.getTopRated;
        } else if (category === Category.UP_COMING) {
          newResults = data.getUpcoming;
        }
        newData = [...movieData.results, ...newResults.results];
        setMovieData({
          results: newData,
          total_results: newResults.total_results,
        });
      }
    }

    setLoading(false);
  };

  const handleFetchMore = (page: number) => getMovies(page);

  let view = null;

  if (loading) {
    view = (
      <Slider
        movies={[]}
        title={title}
        fetchMore={handleFetchMore}
        totalResults={0}
        loadingState={LoadingState.LOADING}
        id={nanoid()}
      ></Slider>
    );
  } else if (movieData.results.length) {
    view = (
      <Slider
        movies={
          movieData
            ? movieData.results.map((item: any) =>
                Object.assign({}, item, {
                  hide: false,
                  selected: false,
                })
              )
            : []
        }
        title={title}
        fetchMore={handleFetchMore}
        totalResults={movieData.total_results ? movieData.total_results : 0}
        loadingState={LoadingState.LOADED}
        id={nanoid()}
        sliderType={SliderType.movies}
      ></Slider>
    );
  }

  return view;
};

export default React.memo(TopRated);
