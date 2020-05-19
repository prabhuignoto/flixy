import React from "react";
import { useApolloClient } from "@apollo/client";
import { recommended, similar } from "../../gqls/movies";
import MediaObjects from "../../components/media-objects/media-objects";
import Movie from "../../models/Movie";
import Loader, { LoaderSize } from "../../components/media-loader";
import { MediaObject } from "../../models/MediaObject";
import MediaRelated from "../../components/media-related/media-related";

const RecommendedMovies: React.FunctionComponent<{
  movieId: number;
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
        query: recommended,
        variables: {
          lang: "en-US",
          movie_id: movieId,
          page: 1,
        },
      });
      setMovieData(data.getRecommendations);
      setLoading(false);
    };

    let view = null;

    if (loading) {
      view = <Loader size={LoaderSize.large} />;
    } else if (movieData && movieData.results.length) {
      const data: MediaObject[] = movieData.results.map((mov) => ({
        id: mov.id,
        name: mov.original_title || "",
        visible: false,
        path: mov.poster_path || "",
      }));
      const title = `Recommended Movies ...`
      view = <MediaRelated items={data} id={movieId} title={title}/>;
    }

    return <div style={{ height: "100%", position: "relative" }}>{view}</div>;
  },
  (prev, cur) => prev.movieId === cur.movieId
);

export default RecommendedMovies;
