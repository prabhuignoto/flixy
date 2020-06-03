import React from "react";
import { useApolloClient, DocumentNode } from "@apollo/client";
import { searchMovies } from "../../gqls/movies";
import { searchTv } from "../../gqls/tv";
import Movie from "../../models/Media";
import { MediaType, SearchContainer as SearchContainerModel } from "../models";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import MediaGrid from "../../components/media-objects/media-grid";
import styled from "styled-components";
import { nanoid } from "nanoid";
import useResponsive from "../../effects/useResponsive";
import MediaObjects from "../../components/media-objects/media-objects";

const getQuery: (m: MediaType) => DocumentNode = (type) => {
  switch (type) {
    case MediaType.MOVIES:
      return searchMovies;
    case MediaType.TV:
      return searchTv;
  }
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const SearchContainer: React.FunctionComponent<SearchContainerModel> = ({
  query,
  type,
}) => {
  const client = useApolloClient();
  const [movieData, setMovieData] = React.useState<{
    results: Movie[];
    total_results?: number;
  }>({
    results: [],
    total_results: 0,
  });
  const gridRef = React.useRef(null);
  const [loading, setLoading] = React.useState(false);
  const resx = useResponsive();

  React.useEffect(() => {
    // setMovieData({ results: [], total_results: 0 });
    getResults(1);
  }, [query]);

  const getResults = async (page: number) => {
    setLoading(true);
    const { data } = await client.query({
      query: getQuery(type),
      variables: {
        lang: "en-US",
        page,
        query,
      },
    });

    if (data) {
      let newData = [] as Movie[];
      if (movieData.results) {
        let newResults = [];
        if (type === MediaType.MOVIES) {
          newResults = data.searchMovies;
        } else if (type === MediaType.TV) {
          newResults = data.searchTv;
        }
        newData = [...movieData.results, ...newResults.results];
        setMovieData({
          results: newData,
          total_results: newResults.total_results,
        });
      }
    }

    setLoading(false);
  };

  const handleFetchMore = (page: number) => getResults(page);

  let view = null;

  if (loading) {
    // view = <Loader size={LoaderSize.large} />;
  } else if (!loading && movieData && movieData.results.length) {
    const data: MediaObject[] = movieData.results.map(
      ({
        original_title,
        poster_path,
        id,
        release_date,
        overview,
        vote_average,
        original_name,
        first_air_date,
      }) => ({
        id: id,
        name: original_title || original_name || "",
        overview,
        path: poster_path || "",
        release_date: release_date || first_air_date || "",
        visible: false,
        vote_average,
      })
    );
    view = (
      <MediaObjects
        items={data}
        id="search"
        height={resx.isBigScreen ? 400 : 320}
        thumbnailSize={ThumbnailSize.large}
        itemSize={resx.isBigScreen ? 230 : 180}
        useExtendedCard
      />
    );
  }

  return <Wrapper ref={gridRef}>{view}</Wrapper>;
};

export default SearchContainer;
