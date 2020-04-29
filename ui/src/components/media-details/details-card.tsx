import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  DetailsPosterWrapper,
  Title,
  CloseDetails,
  Overview,
  Attributes,
} from "./details-card.styles";
import Movie from "../../models/Movie";
import Poster from "../media-poster/poster";
import { CardSize } from "../../models/CardSize";
import { CloseIcon, ClockIcon } from "./../icons/index";
import Genres from "../media-genres/genres";
import CastDetails from "../../containers/details/castDetails";
import RunTime from "./details-runtime";
import DetailsTitle from "./details-title";

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default ({
  title,
  handleClose,
  id,
  overview,
  genres,
  runtime,
  release_date,
  isLoading,
}: CardDetail) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  const [objectColumns, setObjectColumns] = React.useState(0);

  React.useEffect(() => {
    if (wrapperRef && wrapperRef.current) {
      setObjectColumns(Math.round(wrapperRef.current.clientWidth / 200));
    }
  }, []);

  return (
    <DetailsCardWrapper ref={wrapperRef}>
      {
        !isLoading ? (
          <DetailsWrapper>
            <DetailsTitle year={release_date} title={title}></DetailsTitle>
            <Overview>{overview}</Overview>
            <Attributes>
              <Genres items={genres} />
              {runtime && <RunTime runtime={runtime} />}
            </Attributes>
            <CastDetails movieId={id} objectColumns={objectColumns} />
          </DetailsWrapper>
        ) : null
        /* <DetailsPosterWrapper>
        <Poster poster_path={poster_path} size={CardSize.large} />
      </DetailsPosterWrapper> */
      }
      <CloseDetails onClick={handleClose}>
        <CloseIcon />
      </CloseDetails>
    </DetailsCardWrapper>
  );
};
