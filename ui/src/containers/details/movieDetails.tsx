import React from "react";
import { useApolloClient } from "@apollo/client";
import { details } from "../../gqls/movieDetails";
import CardDetails from "../../components/media-details/details-main";
import { MovieDetail } from "../../models/MovieDetails";
import Loader from "../../components/media-loader";
import { useSpring, config, animated } from "react-spring";
import styled from "styled-components";
import useResponsive, { responsiveProps } from "../../effects/useResponsive";
import memoize from "memoize-one";

const Shimmer = React.memo(() => <Loader />);

const getHeight = memoize(
  ({ isBigScreen, isTabletOrMobile }: responsiveProps) => {
    let height;
    if (isBigScreen) {
      height = 820;
    } else if (isTabletOrMobile) {
      height = 760;
    } else {
      height = 520;
    }
    return height;
  }
);

const MovieDetails: React.FunctionComponent<{
  movieId: number;
  handleClose?: () => void;
  hide?: boolean;
}> = ({ movieId, handleClose, hide }) => {
  const [data, setData] = React.useState<MovieDetail | null>();
  const [loading, setLoading] = React.useState(false);
  const client = useApolloClient();
  const [mounted, setMounted] = React.useState(false);
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const resxProps = useResponsive();

  const [props, setProps] = useSpring(() => ({
    height: 0,
    opacity: 1,
    config: config.default,
  }));

  React.useEffect(() => {
    setMounted(true);
    return () => {
      setMounted(false);
    };
  }, []);

  React.useEffect(() => {
    if (mounted && movieId) {
      setLoading(true);
      if (wrapperRef && wrapperRef.current) {
        const { isBigScreen, isTabletOrMobile } = resxProps;
        setProps({
          height: getHeight(resxProps),
          from: {
            height: 0,
          },
          onRest: () => executeQuery(),
        });
      }
    }
  }, [movieId]);

  React.useEffect(() => {
    if (mounted && hide) {
      setProps({
        height: 0,
        from: {
          height: getHeight(resxProps),
        },
      });
    }
  }, [hide]);

  const executeQuery = async () => {
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

  let view = null;

  if (!loading && data && !hide) {
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
        key={movieId}
      />
    );
  } else if (loading) {
    view = <Shimmer />;
  }

  const Wrapper = styled(animated.div)`
    position: relative;
    width: 98%;
    margin: 0 auto;
    border-radius: 0.2rem;
  `;

  return (
    <Wrapper style={props} ref={wrapperRef} key={movieId}>
      {view}
    </Wrapper>
  );
};

export default React.memo(
  MovieDetails,
  (prev, cur) => prev.movieId === cur.movieId
);
