import * as React from "react";
import { useApolloClient } from "@apollo/client";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/movies";
import Movie from "./../../models/Movie";
import { LoadingState } from "../../models/Slider";

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
    getMovies(1);
  }, []);

  const getMovies = async (page: number) => {
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
        newData = [...movieData.results, ...data.getTopRated.results];
      }
      setMovieData({
        results: newData,
        total_results: data.getTopRated.total_results,
      });
    }

    setLoading(false);
  };

  const handleFetchMore = (page: number) => {
    getMovies(page);
  };

  let view = null;

  if (loading) {
    view = (
      <Slider
        movies={[]}
        title="Top Rated"
        fetchMore={handleFetchMore}
        totalResults={0}
        loadingState={LoadingState.LOADING}
      ></Slider>
    );
  } else {
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
        title="Top Rated"
        fetchMore={handleFetchMore}
        totalResults={movieData.total_results ? movieData.total_results : 0}
        loadingState={LoadingState.LOADED}
      ></Slider>
    );
  }

  return view;
};

export default React.memo(TopRated);
