import React from "react";
import { useQuery } from "@apollo/react-hooks";
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
}> = React.memo(({ movieId, handleClose }) => {
  const [dataReady, setDataReady] = React.useState(false);

  const { loading, error, data } = useQuery<MovieResultDetails>(details, {
    variables: {
      lang: "en-US",
      id: movieId,
    },
    fetchPolicy: "cache-and-network",
    onCompleted: () => setDataReady(true),
    notifyOnNetworkStatusChange: true,
  });

  // let loadingState: LoadingState = LoadingState.DEFAULT;

  let view = null;
  if (dataReady && data?.getDetails) {
    let loadingState = LoadingState.LOADED;
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
}, (prev, current) => prev.movieId === current.movieId);

export default MovieDetails;
