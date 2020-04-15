import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { upcoming } from "../../gqls/movies";

export default () => {
  const { loading, error, data } = useQuery(upcoming, {
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

  if (data && data.getUpcoming) {
    view = (
      <Slider movies={data.getUpcoming.results} title="Upcoming"></Slider>
    );
  }

  return view;
};
