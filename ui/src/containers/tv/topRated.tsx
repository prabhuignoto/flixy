import * as React from "react";
import { useQuery } from "@apollo/client";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/tv";
import { LoadingState } from "../../models/Slider";

export default () => {
  const { loading, error, data } = useQuery(topRated, {
    variables: {
      lang: "en-US",
      page: 1
    },
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  if (loading) {
    loadingState = LoadingState.LOADING;
  } else if (error) {
    loadingState = LoadingState.FAILED;
  } else {
    loadingState = LoadingState.LOADED;
  }

  return (
    <Slider
      movies={data && data.getTopRatedTv ? data.getTopRatedTv.results : []}
      title="Top Rated"
      totalResults={data && data.getTopRatedTv ? data.getTopRatedTv.total_results : 0}
      loadingState={loadingState}
    ></Slider>
  );
};
