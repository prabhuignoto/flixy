import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/movies";

export default () => {
  const { loading, error, data, fetchMore } = useQuery(topRated, {
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
          const newData = [...previous.getTopRated.results, ...fetchMoreResult.getTopRated.results];
          return Object.assign({}, previous, {
            getTopRated: Object.assign({}, previous.getTopRated, {
              results: newData,
            })
          });
        }
      },
    });
  };

  if (data && data.getTopRated) {
    view = (
      <Slider
        movies={data.getTopRated.results}
        title="Top Rated"
        fetchMore={handleFetchMore}
        fetchMoreQueryEntry="getTopRated"
        totalResults={data.getTopRated.total_results}
      ></Slider>
    );
  }

  return view;
};
