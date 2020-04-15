import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/movies";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(popular, {
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

  if (data && data.getPopular) {
    view = (
      <Slider movies={data.getPopular.results} title="Trending"></Slider>
    );
  }

  return view;
};
