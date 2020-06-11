import React from 'react';
import { useApolloClient, DocumentNode } from '@apollo/client';
import { recommended, similar } from '../../gqls/movies';
import { recommendedTv, similarTv } from '../../gqls/tv';
import Movie from '../../models/Media';
import { MediaObject } from '../../models/MediaObject';
import MediaRelated from '../../components/media-related/media-related';
import { MediaType, RelatedMediaType } from '../models';

const getQuery: (t: MediaType, relType: RelatedMediaType) => DocumentNode = (
  type,
  relType
) => {
  switch (type) {
    case MediaType.MOVIES:
      return relType === RelatedMediaType.RECOMMENDED ? recommended : similar;
    case MediaType.TV:
      return relType === RelatedMediaType.RECOMMENDED
        ? recommendedTv
        : similarTv;
  }
};

export interface RelatedMediaModel {
  type: MediaType;
  relatedMediaType: RelatedMediaType;
  id: number | string;
  title?: string;
}

const RelatedMedia: React.FunctionComponent<RelatedMediaModel> = React.memo(
  ({ id, type, relatedMediaType, title }) => {
    const client = useApolloClient();
    const [movieData, setMovieData] = React.useState<{
      results: Movie[];
      total_results?: number;
    }>({
      results: [],
      total_results: 0,
    });
    const [loading, setLoading] = React.useState(false);

    React.useEffect(() => {
      executeQuery();
    }, []);

    const executeQuery = async () => {
      setLoading(true);
      const { data } = await client.query({
        query: getQuery(type, relatedMediaType),
        variables: {
          lang: 'en-US',
          id: id,
          page: 1,
        },
      });
      if (data) {
        let newData = [] as Movie[];
        if (movieData.results) {
          let newResults = [];
          if (relatedMediaType === RelatedMediaType.SIMILAR) {
            newResults =
              type === MediaType.MOVIES ? data.getSimilar : data.getTvSimilar;
          } else if (relatedMediaType === RelatedMediaType.RECOMMENDED) {
            newResults =
              type === MediaType.MOVIES
                ? data.getRecommendations
                : data.getTvRecommendations;
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

    let view = null;

    if (loading) {
      // view = <Loader size={LoaderSize.large} />;
    } else if (movieData && movieData.results.length) {
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
          name: original_title || original_name || '',
          overview,
          path: poster_path || '',
          release_date: release_date || first_air_date || '',
          visible: false,
          vote_average,
        })
      );
      view = <MediaRelated items={data} id={id} title={title} />;
    }

    return <div style={{ height: '100%', position: 'relative' }}>{view}</div>;
  },
  (prev, cur) => prev.id === cur.id
);

export default RelatedMedia;
