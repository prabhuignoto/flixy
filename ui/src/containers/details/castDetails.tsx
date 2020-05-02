import React from "react";
import { useQuery } from "@apollo/client";
import { LoadingState } from "../../models/Slider";
import { Credits } from "../../models/Credits";
import { cast } from "../../gqls/cast";
import MediaObjects from "../../components/media-objects/media-objects";
import { MediaObject } from "./../../models/MediaObject";
import { Cast } from "../../models/Cast";
import { Crew } from "../../models/Crew";
import { details } from "./../../gqls/movieDetails";

interface CastResultDetails {
  getCredits: Credits;
}

type CastAndCrewModel = {
  movieId?: number;
  objectColumns: number;
  title?: string;
  isCast?: boolean;
};

const CastAndCrew: React.FunctionComponent<CastAndCrewModel> = ({
  movieId,
  objectColumns,
  title,
  isCast,
}) => {

  const { loading, error, data } = useQuery<CastResultDetails>(cast, {
    variables: {
      lang: "en-US",
      movie_id: movieId,
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: false,
  });

  let view: any = null;

  if (loading) {
    view = <MediaObjects title={title} columns={0} items={[]} />;
  } else if (!error && data?.getCredits) {
    const { id, crew, cast } = data?.getCredits;
    let results: (Cast | Crew)[] = [];
    if (isCast) {
      results = cast;
    } else {
      results = crew;
    }
    view = (
      <MediaObjects
        title={title}
        columns={objectColumns}
        items={results.map<MediaObject>(({ name, profile_path, id }) => ({
          name: name,
          path: profile_path,
          id,
        }))}
      />
    );
  }

  return <>{view}</>;
};

export default CastAndCrew;
