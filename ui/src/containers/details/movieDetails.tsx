import React from "react";
import { useQuery } from "@apollo/client";
import { details } from "../../gqls/movieDetails";
import { LoadingState } from "../../models/Slider";
import CardDetails from "../../components/media-details/details-card";
import { MovieDetail } from "../../models/MovieDetails";

interface MovieResultDetails {
  getDetails: MovieDetail;
}

const MovieDetails: React.FunctionComponent<{
  movieId: number;
  handleClose?: () => void;
}> = ({ movieId, handleClose }) => {
  const { loading, error, data } = useQuery<MovieResultDetails>(details, {
    variables: {
      lang: "en-US",
      id: movieId,
    },
  });

  let view = null;
  if (loading) {
    view = <CardDetails isLoading={loading} id={new Date().getMilliseconds()} />;
  } else if (!error && data?.getDetails) {
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
    } = data?.getDetails;

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
      />
    );
  }
  return <>{view}</>;
};

export default MovieDetails;
