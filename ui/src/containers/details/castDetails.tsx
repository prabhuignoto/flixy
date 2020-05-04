import React from "react";
import { useApolloClient } from "@apollo/client";
import { Credits } from "../../models/Credits";
import { cast } from "../../gqls/cast";
import MediaObjects from "../../components/media-objects/media-objects";
import { MediaObject } from "./../../models/MediaObject";

interface CastResultDetails {
  getCredits: Credits;
}

interface CastAndCrewModel {
  movieId?: number;
  title?: string;
  isCast?: boolean;
};

const CastAndCrew: React.FunctionComponent<CastAndCrewModel> = React.memo(
  ({ movieId }) => {
    const client = useApolloClient();
    const [loading, setLoading] = React.useState(false);
    const [detailsData, setDetailsData] = React.useState<Credits>({ id: "" });

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
          {cast && (
            <MediaObjects
              title={"Movie Cast"}
              id={+id}
              items={cast.map<MediaObject>(({ name, profile_path, id }) => ({
                name: name,
                path: profile_path,
                id,
              }))}
            />
          )}
          {crew && (
            <MediaObjects
              title={"Movie Crew"}
              id={+id}
              items={crew.map<MediaObject>(({ name, profile_path, id }) => ({
                name: name,
                path: profile_path,
                id,
              }))}
            />
          )}
        </>
      );
    }
    return <>{view}</>;
  },
  (prev, current) => prev.movieId === current.movieId
);

export default CastAndCrew;
