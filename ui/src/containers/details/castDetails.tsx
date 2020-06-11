import React from 'react';
import { useApolloClient } from '@apollo/client';
import { Credits } from '../../models/Credits';
import { cast, tvCast } from '../../gqls/cast';
import MediaObjects from '../../components/media-objects/media-objects';
import { MediaObject, ThumbnailSize } from './../../models/MediaObject';
import styled from 'styled-components';
import useResponsive, { responsiveProps } from '../../effects/useResponsive';
import { SliderType } from '../../models/Slider';

interface CastResultDetails {
  getCredits: Credits;
  getTvCredits: Credits;
}

interface CastAndCrewModel {
  movieId?: number | string;
  title?: string;
  isCast?: boolean;
  sliderType?: SliderType;
}

const MediaObjectsWrapper = styled.div<{ resxProps?: responsiveProps }>`
  margin-bottom: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: ${({ resxProps: st }) =>
    (st && st.isBigScreen) || st?.isTabletOrMobile ? '97%' : '48%'};
`;

const CastAndCrew: React.FunctionComponent<CastAndCrewModel> = React.memo(
  ({ movieId, sliderType }) => {
    const client = useApolloClient();
    const [loading, setLoading] = React.useState(false);
    const [detailsData, setDetailsData] = React.useState<Credits>({ id: '' });
    const resxProps = useResponsive();
    const { isBigScreen } = resxProps;

    const executeQuery = async () => {
      setLoading(true);
      const { data } = await client.query<CastResultDetails>({
        query: sliderType === SliderType.movies ? cast : tvCast,
        variables: {
          lang: 'en-US',
          movie_id: movieId,
        },
        fetchPolicy: 'cache-first',
      });

      if (data) {
        const _data =
          sliderType === SliderType.movies
            ? data.getCredits
            : data.getTvCredits;
        setDetailsData(_data);
      }
      setLoading(false);
    };

    React.useEffect(() => {
      if (movieId) {
        executeQuery();
      }
    }, [movieId]);

    let view: any = null;

    if (!loading && detailsData.id) {
      const { crew, cast, id } = detailsData;
      view = (
        <>
          {cast && cast.length ? (
            <MediaObjectsWrapper resxProps={resxProps}>
              <MediaObjects
                title={'Movie Cast'}
                id={+id}
                items={cast
                  .map<MediaObject>(
                    ({ name, profile_path, id, character, order }) => ({
                      name: name,
                      path: profile_path,
                      id,
                      info: character,
                      order,
                    })
                  )
                  .sort((a, b) => {
                    if (a.order && b.order) {
                      return a.order - b.order;
                    } else {
                      return 0;
                    }
                  })}
                height={isBigScreen ? 260 : 220}
                itemSize={isBigScreen ? 180 : 140}
                thumbnailSize={ThumbnailSize.small}
                showExpand
              />
            </MediaObjectsWrapper>
          ) : null}
          {crew && crew.length ? (
            <MediaObjectsWrapper resxProps={resxProps}>
              <MediaObjects
                title={'Movie Crew'}
                id={+id}
                items={crew.map<MediaObject>(
                  ({ name, profile_path, id, job }) => ({
                    name: name,
                    path: profile_path,
                    id,
                    info: job,
                  })
                )}
                height={isBigScreen ? 260 : 220}
                itemSize={isBigScreen ? 180 : 140}
                thumbnailSize={ThumbnailSize.small}
                showExpand
              />
            </MediaObjectsWrapper>
          ) : null}
        </>
      );
    }
    return <>{view}</>;
  },
  (prev, current) => prev.movieId === current.movieId
);

export default CastAndCrew;
