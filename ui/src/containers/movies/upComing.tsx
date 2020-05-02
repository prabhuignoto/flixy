import * as React from "react";
import { useQuery } from "@apollo/client";
import Slider from "../../components/media-slider";
import { upcoming } from "../../gqls/movies";
import { LoadingState } from "../../models/Slider";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(upcoming, {
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
            ...previous.getUpcoming.results,
            ...fetchMoreResult.getUpcoming.results,
          ];
          return Object.assign({}, previous, {
            getUpcoming: Object.assign({}, previous.getUpcoming, {
              results: newData,
            }),
          });
        }
      },
    });
  };

  return (
    <Slider
      movies={data && data.getUpcoming ? data.getUpcoming.results : []}
      title="Up Coming"
      fetchMore={handleFetchMore}
      fetchMoreQueryEntry="getUpcoming"
      totalResults={data && data.getUpcoming ? data.getUpcoming.total_results : 0}
      loadingState={loadingState}
    ></Slider>
  );
};
