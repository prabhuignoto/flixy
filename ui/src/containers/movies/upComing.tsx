import * as React from "react";
import { useApolloClient } from "@apollo/client";
import Slider from "../../components/media-slider";
import { upcoming } from "../../gqls/movies";
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
      query: upcoming,
      variables: {
        lang: "en-US",
        page,
      },
      fetchPolicy: "cache-first",
    });

    let newData = [] as Movie[];
    if (movieData.results) {
      newData = [...movieData.results, ...data.getUpcoming.results];
    }
    setMovieData({
      results: newData,
      total_results: data.getUpcoming.total_results,
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
          title="Top Rated"
          fetchMore={handleFetchMore}
          totalResults={movieData.total_results ? movieData.total_results : 0}
        ></Slider>
      ) : null}
    </>
  );
};

export default React.memo(TopRated);
