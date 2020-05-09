import React from "react";
import { useApolloClient } from "@apollo/client";
import { details } from "../../gqls/movieDetails";
import CardDetails from "../../components/media-details/details-card";
import { MovieDetail } from "../../models/MovieDetails";
import Shimmer from "../../components/media-loader";
import { useSpring, config, animated } from "react-spring";
import styled from "styled-components";

interface MovieResultDetails {
  getDetails: MovieDetail;
}

const MovieDetails: React.FunctionComponent<{
  movieId: number;
  handleClose?: () => void;
  hide?: boolean;
}> = ({ movieId, handleClose, hide }) => {
  const [data, setData] = React.useState<MovieDetail | null>();
  const [loading, setLoading] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const client = useApolloClient();
  const [mounted, setMounted] = React.useState(false);

  const [props, setProps] = useSpring(() => ({
    height: 660,
    opacity: 1,
    from: {
      height: 0,
      opacity: 0,
    },
    delay: 100,
    duration: 500,
    config: config.default,
    reset: true,
  }));

  React.useEffect(() => {
    setMounted(true);
    return () => {
      debugger;
      setMounted(false);
    }
  }, []);

  React.useEffect(() => {
    if(mounted && movieId) {
        setProps({
          height: 660,
        });
      executeQuery();
    } else {
      setProps({
        height: 0,
      });
    }
  }, [mounted]);

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
      video,
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
  } else if (show && loading) {
    view = <Shimmer />;
  }

  const Wrapper = styled(animated.div)`
    position: relative;
  `;

  return <Wrapper style={props}>{view}</Wrapper>;
};

export default MovieDetails;
