import React from "react";
import { useQuery } from "@apollo/client";
import Slider from "../../components/media-slider";
import { popular } from "../../gqls/movies";
import { LoadingState } from "../../models/Slider";

export default React.memo(({ id }: { id?: number }) => {
  const { loading, error, data, fetchMore } = useQuery(popular, {
    variables: {
      lang: "en-US",
      page: 1,
    },
    fetchPolicy: "cache-and-network",
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  if (loading) {
    loadingState = LoadingState.LOADING;
  } else if (error) {
    loadingState = LoadingState.FAILED;
  } else {
    loadingState = LoadingState.LOADED;
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
          const newData = [
            ...previous.getPopular.results,
            ...fetchMoreResult.getPopular.results,
          ];
          return Object.assign({}, previous, {
            getPopular: Object.assign({}, previous.getPopular, {
              results: newData.map((item) =>
                Object.assign({}, item, {
                  hide: false,
                })
              ),
            }),
          });
        }
      },
    });
  };

  // return (
  //   <Slider
  //     movies={data && data.getPopular ? data.getPopular.results : []}
  //     title="Trending"
  //     fetchMore={handleFetchMore}
  //     fetchMoreQueryEntry="getPopular"
  //     totalResults={data && data.getPopular ? data.getPopular.total_results : 0}
  //     loadingState={loadingState}
  //   ></Slider>
  // );

  return null;
}, (prev,current) => prev.id === current.id);
