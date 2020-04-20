import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { onAir } from "../../gqls/tv";

export default () => {
  const { loading, error, data } = useQuery(onAir, {
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

  if (data && data.getTvOnAir) {
    view = (
      <Slider
        movies={data.getTvOnAir.results}
        title="Upcoming"
        totalResults={data.getTvOnAir.total_results}
      ></Slider>
    );
  }

  return view;
};
