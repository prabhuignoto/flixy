import * as React from "react";
import { useApolloClient } from "@apollo/client";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/movies";
import Movie from "./../../models/Movie";

const TopRated: React.FunctionComponent = () => {
  const client = useApolloClient();
  const [movieData, setMovieData] = React.useState<{
    results: Movie[];
    total_results?: number;
  }>({
    results: [],
    total_results: 0,
  });

  React.useEffect(() => {
    getMovies(1);
  }, []);

  const getMovies = async (page: number) => {
    const { data } = await client.query({
      query: popular,
      variables: {
        lang: "en-US",
        page,
      },
      fetchPolicy: "cache-first",
    });

    let newData = [] as Movie[];
    if (movieData.results) {
      newData = [...movieData.results, ...data.getPopular.results];
    }
    setMovieData({
      results: newData,
      total_results: data.getPopular.total_results,
    });
  };

  const handleFetchMore = (page: number) => {
    getMovies(page);
  };

  return (
    <>
      {movieData.results.length ? (
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
          title="Trending"
          fetchMore={handleFetchMore}
          totalResults={movieData.total_results ? movieData.total_results : 0}
        ></Slider>
      ) : null}
    </>
  );
};

export default React.memo(TopRated);
