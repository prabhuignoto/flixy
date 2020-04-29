import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { LoadingState } from "../../models/Slider";
import { Credits } from "../../models/Credits";
import { cast } from "../../gqls/cast";
import MediaObjects from "../../components/media-objects/media-objects";
import { MediaObject } from "./../../models/MediaObject";

interface CastResultDetails {
  getCredits: Credits;
}

const CastAndCrew: React.FunctionComponent<{
  movieId?: number;
  objectColumns: number;
}> = ({ movieId, objectColumns }) => {
  const { loading, error, data } = useQuery<CastResultDetails>(cast, {
    variables: {
      lang: "en-US",
      movie_id: movieId,
    },
    fetchPolicy: "cache-and-network",
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  let view = null;

  if (loading) {
    loadingState = LoadingState.LOADING;
  } else if (error) {
    loadingState = LoadingState.FAILED;
  } else {
    loadingState = LoadingState.LOADED;

    if (data?.getCredits) {
      const { id, cast } = data?.getCredits;

      view = (
        <MediaObjects
          columns={objectColumns}
          items={cast.map<MediaObject>(({ name, profile_path, id }) => ({
            name: name,
            path: profile_path,
            id,
          }))}
        />
      );
    }
  }

  return view;
};

export default CastAndCrew;
