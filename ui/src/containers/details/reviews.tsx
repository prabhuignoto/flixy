import React from "react";
import { useApolloClient } from "@apollo/client";
import reviewsQuery from "../../gqls/reviews";
import Loader from "../../components/media-loader";
import Review from "../../models/Review";
import Reviews from "../../components/media-details/reviews/details-reviews";

interface MovieResultDetails {
  getReviews: ReviewResultModel;
}

interface ReviewResultModel {
  total_results: number;
  results: Review[];
  id: number;
}

const MovieDetails: React.FunctionComponent<{
  movieId: number;
}> = React.memo(
  ({ movieId }) => {
    const [data, setData] = React.useState<ReviewResultModel | null>();
    const [loading, setLoading] = React.useState(false);

    const client = useApolloClient();

    React.useEffect(() => {
      if (movieId) {
        executeQuery();
      } else {
        setData(null);
      }
    }, [movieId]);

    const executeQuery = async () => {
      setLoading(true);

      const { data } = await client.query<MovieResultDetails>({
        query: reviewsQuery,
        variables: {
          page: 1,
          movie_id: movieId,
        },
      });

      if (data) {
        setData(data.getReviews);
      }

      setLoading(false);
    };

    let view;

    if (!loading && data && data.id) {
      view = <Reviews items={data.results} />;
    } else {
      view = <Loader />;
    }

    return view;
  },
  (prev, current) => prev.movieId === current.movieId
);

export default MovieDetails;
