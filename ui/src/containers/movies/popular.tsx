import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/movies";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(popular, {
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
          const newData = [...previous.getPopular.results, ...fetchMoreResult.getPopular.results];
          return Object.assign({}, previous, {
            getPopular: Object.assign({}, previous.getPopular, {
              results: newData,
            })
          });
        }
      },
    });
  };

  if (data && data.getPopular) {
    view = (
      <Slider
        movies={data.getPopular.results}
        title="Trending"
        fetchMore={handleFetchMore}
        fetchMoreQueryEntry="getPopular"
        totalResults={data.getPopular.total_results}
      ></Slider>
    );
  }

  return view;
};
