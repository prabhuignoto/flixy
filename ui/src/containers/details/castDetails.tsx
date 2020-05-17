import React from "react";
import { useApolloClient } from "@apollo/client";
import { Credits } from "../../models/Credits";
import { cast } from "../../gqls/cast";
import MediaObjects from "../../components/media-objects/media-objects";
import { MediaObject, ThumbnailSize } from "./../../models/MediaObject";
import styled from "styled-components";
import useResponsive, { responsiveProps } from "../../effects/useResponsive";

interface CastResultDetails {
  getCredits: Credits;
}

interface CastAndCrewModel {
  movieId?: number;
  title?: string;
  isCast?: boolean;
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
    (st && st.isBigScreen) || st?.isTabletOrMobile ? "97%" : "48%"};
`;

const MediaObjectHeader = styled.div`
  margin-bottom: 0.5rem;
  font-family: "Poppins";
  font-size: 0.9rem;
  font-weight: 300;
  color: #fff;
  text-align: left;
  padding-left: 0.2rem;
  text-transform: uppercase;
`;

const CastAndCrew: React.FunctionComponent<CastAndCrewModel> = React.memo(
  ({ movieId }) => {
    const client = useApolloClient();
    const [loading, setLoading] = React.useState(false);
    const [detailsData, setDetailsData] = React.useState<Credits>({ id: "" });
    const resxProps = useResponsive();
    const { isBigScreen } = resxProps;

    const executeQuery = async () => {
      setLoading(true);
      const { data } = await client.query<CastResultDetails>({
        query: cast,
        variables: {
          lang: "en-US",
          movie_id: movieId,
        },
        fetchPolicy: "cache-first",
      });
      if (data) {
        setDetailsData(data.getCredits);
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
                title={"Movie Cast"}
                id={+id}
                items={cast.map<MediaObject>(({ name, profile_path, id }) => ({
                  name: name,
                  path: profile_path,
                  id,
                }))}
                height={isBigScreen ? 250 : 220}
                itemSize={isBigScreen ? 150 : 125}
                thumbnailSize={ThumbnailSize.small} 
              />
            </MediaObjectsWrapper>
          ) : null}
          {crew && crew.length ? (
            <MediaObjectsWrapper resxProps={resxProps}>
              <MediaObjects
                title={"Movie Crew"}
                id={+id}
                items={crew.map<MediaObject>(({ name, profile_path, id }) => ({
                  name: name,
                  path: profile_path,
                  id,
                }))}
                height={isBigScreen ? 250 : 220}
                itemSize={isBigScreen ? 150 : 125}
                thumbnailSize={ThumbnailSize.small}
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
