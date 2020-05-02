import * as React from "react";
import { useQuery } from "@apollo/client";
import Slider from "../../components/media-slider";
import { onAir } from "../../gqls/tv";
import { LoadingState } from "../../models/Slider";

export default () => {
  const { loading, error, data } = useQuery(onAir, {
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
      movies={data && data.getTvOnAir ? data.getTvOnAir.results : []}
      title="Upcoming"
      totalResults={data && data.getTvOnAir ? data.getTvOnAir.total_results : 0}
      loadingState={loadingState}
    ></Slider>
  );
};
