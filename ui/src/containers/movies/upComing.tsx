import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { upcoming } from "../../gqls/movies";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(upcoming, {
    variables: {
      lang: "en-US",
      page: 1,
    },
    fetchPolicy: "cache-and-network"
  });

  let view = null;

  if (loading) {
    view = <div>loading</div>;
  }

  if (error) {
    view = <div>Error</div>;
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
          const newData = [...previous.getUpcoming.results, ...fetchMoreResult.getUpcoming.results];
          return Object.assign({}, previous, {
            getUpcoming: Object.assign({}, previous.getUpcoming, {
              results: newData,
            })
          });
        }
      },
    });
  };

  if (data && data.getUpcoming) {
    view = (
      <Slider
        movies={data.getUpcoming.results}
        title="Up Coming"
        fetchMore={handleFetchMore}
        fetchMoreQueryEntry="getUpcoming"
        totalResults={data.getUpcoming.total_results}
      ></Slider>
    );
  }

  return view;
};
