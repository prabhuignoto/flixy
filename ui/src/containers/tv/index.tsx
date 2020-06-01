import * as React from "react";
import { useApolloClient, DocumentNode } from "@apollo/client";
import Slider from "../../components/media-slider";
import { onAir, popular, topRated } from "../../gqls/tv";
import Movie from "./../../models/Movie";
import { LoadingState, SliderType } from "../../models/Slider";
import { nanoid } from "nanoid";

export enum TvCategory {
  POPULAR = "POPULAR",
  TOP_RATED = "TOP_RATED",
  ON_AIR = "ON_AIR",
}

export interface MediaTvContainer {
  category: TvCategory;
  title: string;
}

const getQuery: (c: TvCategory) => DocumentNode = (category) => {
  switch (category) {
    case TvCategory.POPULAR:
      return popular;
    case TvCategory.TOP_RATED:
      return topRated;
    case TvCategory.ON_AIR:
      return onAir;
  }
};

const Tv: React.FunctionComponent<MediaTvContainer> = ({ category, title }) => {
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
    getTv(1);
  }, []);

  const getTv = async (page: number) => {
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
        if (category === TvCategory.POPULAR) {
          newResults = data.getPopularTv;
        } else if (category === TvCategory.TOP_RATED) {
          newResults = data.getTopRatedTv;
        } else if (category === TvCategory.ON_AIR) {
          newResults = data.getTvOnAir;
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

  const handleFetchMore = (page: number) => {
    getTv(page);
  };

  let view = null;

  if (loading) {
    view = (
      <Slider
        movies={[]}
        title={title}
        fetchMore={handleFetchMore}
        totalResults={0}
        id={nanoid()}
        loadingState={LoadingState.LOADING}
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
                  title: item.name,
                  release_date: item.first_air_date,
                })
              )
            : []
        }
        title={title}
        fetchMore={handleFetchMore}
        totalResults={movieData.total_results ? movieData.total_results : 0}
        loadingState={LoadingState.LOADED}
        sliderType={SliderType.tv}
        id={nanoid()}
      ></Slider>
    );
  }

  return view;
};

export default Tv;
