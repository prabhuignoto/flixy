import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import Slider from "../../components/media-slider";
import { topRated } from "../../gqls/movies";
import { LoadingState } from "../../models/Slider";

export default () => {
  let state: LoadingState = LoadingState.DEFAULT;

  const [dataReady, setDataReady] = React.useState(false);
  const { data, fetchMore } = useQuery(
    topRated,
    {
      variables: {
        lang: "en-US",
        page: 1,
      },
      fetchPolicy: "cache-and-network",
      notifyOnNetworkStatusChange: true,
      onCompleted: () => {
        setDataReady(true);
      },
    }
  );

  const handleFetchMore = React.useCallback((page: number) => {
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
            ...previous.getTopRated.results,
            ...fetchMoreResult.getTopRated.results,
          ];
          return Object.assign({}, previous, {
            getTopRated: Object.assign({}, previous.getTopRated, {
              results: newData,
            }),
          });
        }
      },
    });
  }, []);

  return (
    <>
      {dataReady &&  data.getTopRated && (
        <Slider
          movies={data.getTopRated.results}
          title="Top Rated"
          fetchMore={handleFetchMore}
          fetchMoreQueryEntry="getTopRated"
          totalResults={data.getTopRated.total_results}
        ></Slider>
      )}
    </>
  );
};
