import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/tv";

export default () => {
  const { loading, error, data } = useQuery(popular, {
    variables: {
      lang: "en-US",
    },
  });

  let view = null;

  if (loading) {
    view = <div>loading</div>;
  }

  if (error) {
    view = <div>Error</div>;
  }

  if (data && data.getPopularTv) {
    view = (
      <Slider
        movies={data.getPopularTv.results}
        title="Popular"
        totalResults={data.getPopularTv.total_results}
      ></Slider>
    );
  }

  return view;
};
