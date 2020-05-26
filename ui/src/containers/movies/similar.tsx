import React from "react";
import { useApolloClient } from "@apollo/client";
import { similar } from "../../gqls/movies";
import Movie from "../../models/Movie";
import { MediaObject } from "../../models/MediaObject";
import MediaRelated from "../../components/media-related/media-related";

const RecommendedMovies: React.FunctionComponent<{
  movieId: number | string;
}> = React.memo(
  ({ movieId }) => {
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
      executeQuery();
    }, []);

    const executeQuery = async () => {
      setLoading(true);
      const { data } = await client.query({
        query: similar,
        variables: {
          lang: "en-US",
          movie_id: movieId,
          page: 1,
        },
      });
      setMovieData(data.getSimilar);
      setLoading(false);
    };

    let view = null;

    if (loading) {
      // view = <Loader size={LoaderSize.large} />;
    } else if (movieData && movieData.results.length) {
      const data: MediaObject[] = movieData.results.map(
        ({ original_title, poster_path, id, release_date, overview, vote_average }) => ({
          id: id,
          name: original_title || "",
          overview,
          path: poster_path || "",
          release_date,
          visible: false,
          vote_average
        })
      );

      const title = `Movies you might like ...`;
      view = <MediaRelated items={data} id={movieId} title={title} />;
    }

    return view;
  },
  (prev, cur) => prev.movieId === cur.movieId
);

export default RecommendedMovies;
