import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  DetailsPosterWrapper,
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
import Attribute from "./attribute/details-attribute";
import DetailsTitle from "./title/details-title";
import { CastAndCrew } from "./details-cast-and-crew";
import { format } from "date-fns";
import ISO6391 from "iso-639-1";

type CardDetail = Movie & { handleClose?: () => void; isLoading: boolean };

export default React.memo(
  ({
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

    return (
      <DetailsCardWrapper ref={wrapperRef}>
        {!isLoading ? (
          <>
            <DetailsPosterWrapper>
              <Poster poster_path={poster_path} size={CardSize.large} />
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
              <CastAndCrew id={id} objectColumns={0} />
            </DetailsWrapper>
          </>
        ) : <div>Test</div>}
        <CloseDetails onClick={handleClose}>
          <CloseIcon />
        </CloseDetails>
      </DetailsCardWrapper>
    );
  }, (prev, current) => prev.imdb_id === current.imdb_id
);
