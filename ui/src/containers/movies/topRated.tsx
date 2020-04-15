import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/movies";

export default () => {
  const { loading, error, data } = useQuery(topRated, {
    variables: {
      lang: "en-US",
      page: 3
    },
  });

  let view = null;

  if (loading) {
    view = <div>loading</div>;
  }

  if (error) {
    view = <div>Error</div>;
  }

  if (data && data.getTopRated) {
    view = (
      <Slider movies={data.getTopRated.results} title="Top Rated"></Slider>
    );
  }

  return view;
};
