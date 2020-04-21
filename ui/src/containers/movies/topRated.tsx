import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/movies";
import { LoadingState } from "../../models/Slider";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(topRated, {
    variables: {
      lang: "en-US",
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  if (loading) {
    loadingState = LoadingState.LOADING;
  } else if (error) {
    loadingState = LoadingState.FAILED;
  } else {
    loadingState = LoadingState.LOADED;
  }

  const handleFetchMore = (page: number) => {
    fetchMore({
      variables: {
        page,
        lang: "en-US",
      },
      updateQuery: (previous: any, { fetchMoreResult }: any) => {
        if (!fetchMoreResult) {
          return previous;
        } else {
          const newData = [
            ...previous.getTopRated.results,
            ...fetchMoreResult.getTopRated.results,
          ];
          return Object.assign({}, previous, {
            getTopRated: Object.assign({}, previous.getTopRated, {
              results: newData,
            }),
          });
        }
      },
    });
  };

  return (
    <Slider
      movies={data && data.getTopRated ? data.getTopRated.results : []}
      title="Top Rated"
      fetchMore={handleFetchMore}
      fetchMoreQueryEntry="getTopRated"
      totalResults={data && data.getTopRated ? data.getTopRated.total_results : 0}
      loadingState={loadingState}
    ></Slider>
  );
};
