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
}> = ({ movieId, handleClose }) => {
  const { loading, error, data } = useQuery<MovieResultDetails>(details, {
    variables: {
      lang: "en-US",
      id: movieId,
    },
    fetchPolicy: "cache-and-network",
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  let view = null;

  if (loading) {
    loadingState = LoadingState.LOADING;
  } else if (error) {
    loadingState = LoadingState.FAILED;
    view = <CardDetails isLoading={true} id={Math.random()}/>
  } else {
    loadingState = LoadingState.LOADED;

    if (data?.getDetails) {
      const {
        poster_path,
        title,
        id,
        overview,
        genres,
        runtime,
        release_date
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
          isLoading={false}
        />
      );
    }
  }

  return <>{view}</>;
};

export default React.memo(MovieDetails, (prev, current) => {
  return prev.movieId === current.movieId;
});
