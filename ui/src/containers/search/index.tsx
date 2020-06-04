import React from "react";
import { useApolloClient, DocumentNode } from "@apollo/client";
import { searchMovies } from "../../gqls/movies";
import { searchTv } from "../../gqls/tv";
import Movie from "../../models/Media";
import { MediaType, SearchContainer as SearchContainerModel } from "../models";
import { MediaObject, ThumbnailSize } from "../../models/MediaObject";
import styled from "styled-components";
import useResponsive from "../../effects/useResponsive";
import MediaObjects from "../../components/media-objects/media-objects";
import MovieDetails from "../../containers/details/movieDetails";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ResultsWrapper = styled.div`
  width: 100%;
`;

const DetailsWrapper = styled.section`
  margin-top: 2rem;
  width: 100%;
  height: 400px;
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
  const [movieId, setSelectedMovieId] = React.useState<MediaObject>({id: 0, name: ''});

  React.useEffect(() => {
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

  const handleSelection = (m: MediaObject) => {
    m && setSelectedMovieId(m);
  };

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
        onSelect={handleSelection}
        noTitle
      />
    );
  }

  return (
    <Wrapper ref={gridRef}>
      <ResultsWrapper>{view}</ResultsWrapper>
      <DetailsWrapper>
        {
          <MovieDetails
            movieId={movieId.id}
            hide={!movieId.id}
            handleClose={() => setSelectedMovieId({ id: 0 })}
          />
        }
      </DetailsWrapper>
    </Wrapper>
  );
};

export default SearchContainer;
