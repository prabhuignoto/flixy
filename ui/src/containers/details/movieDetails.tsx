import React from "react";
import { useApolloClient } from "@apollo/client";
import { details } from "../../gqls/movieDetails";
import CardDetails from "../../components/media-details/details-card";
import { MovieDetail } from "../../models/MovieDetails";
import Shimmer from "../../components/media-loader";

interface MovieResultDetails {
  getDetails: MovieDetail;
}

const MovieDetails: React.FunctionComponent<{
  movieId: number;
  handleClose?: () => void;
}> = React.memo(({ movieId, handleClose }) => {
  const [data, setData] = React.useState<MovieDetail | null>();
  const [loading, setLoading] = React.useState(false);

  const client = useApolloClient();

  React.useEffect(() => {
    if(movieId) {
      executeQuery();
    } else {
      setData(null);
    }
  }, [movieId]);

  const executeQuery = async () => {
    setLoading(true);

    const { data } = await client.query({
      query: details,
      variables: {
        lang: "en-US",
        id: movieId,
      },
    });

    setData(data.getDetails);
    setLoading(false);
  };

  let view;

  if (!loading && data && data.id) {
    const {
      poster_path,
      title,
      id,
      overview,
      genres,
      runtime,
      release_date,
      original_language,
      imdb_id,
      vote_average,
      video
    } = data;

    view = (
      <CardDetails
        poster_path={poster_path}
        title={title}
        id={id}
        overview={overview}
        handleClose={handleClose}
        genres={genres}
        runtime={runtime}
        release_date={release_date}
        original_language={original_language}
        isLoading={false}
        imdb_id={imdb_id}
        vote_average={vote_average}
        video={video}
      />
    );
  } else {
    view = <Shimmer />;
  }

  return view;
}, (prev, current) => prev.movieId === current.movieId);

export default MovieDetails;
