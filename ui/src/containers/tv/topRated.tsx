import * as React from "react";
import { useApolloClient } from "@apollo/client";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/tv";
import Movie from "./../../models/Movie";
import { LoadingState, SliderType } from "../../models/Slider";

const TopRated: React.FunctionComponent = () => {
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
      query: topRated,
      variables: {
        lang: "en-US",
        page,
      },
      fetchPolicy: "cache-first",
    });

    if (data) {
      let newData = [] as Movie[];
      if (movieData.results) {
        newData = [...movieData.results, ...data.getTopRatedTv.results];
      }
      setMovieData({
        results: newData,
        total_results: data.getTopRatedTv.total_results,
      });
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
        title="TV - Top Rated"
        fetchMore={handleFetchMore}
        totalResults={0}
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
                  release_date: item.first_air_date
                })
              )
            : []
        }
        title="Top Rated"
        fetchMore={handleFetchMore}
        totalResults={movieData.total_results ? movieData.total_results : 0}
        loadingState={LoadingState.LOADED}
        sliderType={SliderType.tv}
      ></Slider>
    );
  }

  return view;
};

export default React.memo(TopRated);
