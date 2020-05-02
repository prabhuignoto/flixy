import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  DetailsPosterWrapper,
  Title,
  CloseDetails,
  Overview,
  AttributesContainer,
  GenresContainer,
  AttributeContainer,
} from "./details-card.styles";
import Movie from "../../models/Movie";
import Poster from "../media-poster/poster";
import { CardSize } from "../../models/CardSize";
import { CloseIcon, ClockIcon } from "./../icons/index";
import Genres from "../media-genres/genres";
import Attribute from "./details-attribute";
import DetailsTitle from "./details-title";
import { CastAndCrew } from "./details-cast-and-crew";
import { format } from "date-fns";
import ISO6391 from "iso-639-1";
import ImdbButton from "./details-imdb-button";

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default React.memo(({
  title,
  handleClose,
  id,
  overview,
  genres,
  runtime,
  release_date,
  isLoading,
  original_language,
  poster_path,
  imdb_id,
  vote_average,
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
      {!isLoading ? (
        <>
          <DetailsPosterWrapper>
            <Poster poster_path={poster_path} size={CardSize.large} />
            <ImdbButton id={imdb_id} />
          </DetailsPosterWrapper>
          <DetailsWrapper>
            <DetailsTitle
              year={release_date}
              title={title}
              rating={vote_average}
            ></DetailsTitle>
            <Overview>{overview}</Overview>
            <GenresContainer>
              <Genres items={genres} />
              <AttributesContainer>
                {runtime && (
                  <AttributeContainer>
                    <Attribute
                      label="Runtime"
                      value={`${Math.round(runtime / 60)}hrs`}
                    />
                  </AttributeContainer>
                )}
                {release_date && (
                  <AttributeContainer>
                    <Attribute
                      label="Release Date"
                      value={format(new Date(release_date), "do, MMM yyyy")}
                    />
                  </AttributeContainer>
                )}
                {original_language && (
                  <AttributeContainer>
                    <Attribute
                      label="Language"
                      value={ISO6391.getName(original_language)}
                    />
                  </AttributeContainer>
                )}
              </AttributesContainer>
            </GenresContainer>
            <CastAndCrew id={id} objectColumns={objectColumns} />
          </DetailsWrapper>
        </>
      ) : null}
      <CloseDetails onClick={handleClose}>
        <CloseIcon />
      </CloseDetails>
    </DetailsCardWrapper>
  );
}, ((prev, current) => {
  return prev.imdb_id === current.imdb_id;
}));

