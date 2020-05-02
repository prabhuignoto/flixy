import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { LoadingState } from "../../models/Slider";
import { Credits } from "../../models/Credits";
import { cast } from "../../gqls/cast";
import MediaObjects from "../../components/media-objects/media-objects";
import { MediaObject } from "./../../models/MediaObject";
import { Cast } from "../../models/Cast";
import { Crew } from "../../models/Crew";
import { details } from './../../gqls/movieDetails';

interface CastResultDetails {
  getCredits: Credits;
}

const CastAndCrew: React.FunctionComponent<{
  movieId?: number;
  objectColumns: number;
  title?: string;
  isCast?: boolean;
}> = ({ movieId, objectColumns, title, isCast }) => {
  const [dataReady, setDataReady] = React.useState(false);

  const { loading, error, data } = useQuery<CastResultDetails>(cast, {
    variables: {
      lang: "en-US",
      movie_id: movieId,
    },
    fetchPolicy: "cache-and-network",
    notifyOnNetworkStatusChange: true,
    onCompleted: () => setDataReady(true),
  });

  let loadingState: LoadingState = LoadingState.DEFAULT;

  let view = null;

  // if (loading) {
  //   loadingState = LoadingState.LOADING;
  // } else if (error) {
  //   loadingState = LoadingState.FAILED;
  // } else {
  //   loadingState = LoadingState.LOADED;

  if (dataReady && data?.getCredits) {
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
  // }

  return view;
};

export default CastAndCrew;
