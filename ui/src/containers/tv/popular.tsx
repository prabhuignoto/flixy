import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/tv";
import { LoadingState } from "../../models/Slider";

export default () => {
  const { loading, error, data } = useQuery(popular, {
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
      movies={data && data.getPopularTv ? data.getPopularTv.results : []}
      title="Popular"
      totalResults={data && data.getPopularTv ? data.getPopularTv.total_results : 0}
      loadingState={loadingState}
    ></Slider>
  );
};
