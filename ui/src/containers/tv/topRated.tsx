import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/tv";

export default () => {
  const { loading, error, data } = useQuery(topRated, {
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

  if (data && data.getTopRatedTv) {
    view = (
      <Slider
        movies={data.getTopRatedTv.results}
        title="Top Rated"
        totalResults={data.getTopRatedTv.total_results}
      ></Slider>
    );
  }

  return view;
};
