import React from "react";
import {
  Title,
  TitleWrapper,
  TitleText,
  TitleRow1,
  GenresContainer,
  AttributeContainer,
  AttributesContainer,
  MediaRatingWrapper,
} from "./details-title.style";
import { format } from "date-fns";
import ISO6391 from "iso-639-1";

import Genres, { GenreSize } from "../../media-genres/genres";

import Attribute from "../attribute/details-attribute";
import { Genre } from "../../../models/Genre";
import useResponsive from "../../../effects/useResponsive";
import MediaRating, { RatingSize } from "../../media-rating/media-rating";

export interface DetailsTitleModel {
  year?: string;
  title?: string;
  rating?: number;
  runtime?: number;
  releaseDate?: string;
  lang?: string;
  genres?: Genre[];
}

const DetailsTitle: React.FunctionComponent<DetailsTitleModel> = ({
  year,
  title,
  rating,
  releaseDate,
  lang,
  runtime,
  genres,
}) => {
  const resxProps = useResponsive();
  return (
    <TitleWrapper>
      <Title>
        <TitleRow1>
          <TitleText resxProps={resxProps}>{`${title}`}</TitleText>
          <MediaRatingWrapper>
            <MediaRating
              rating={rating || 0}
              size={RatingSize.large}
            ></MediaRating>
          </MediaRatingWrapper>
          <GenresContainer>
            {genres && <Genres items={genres} size={GenreSize.large} />}
            {!resxProps.isTabletOrMobile && (
              <AttributesContainer resxProps={resxProps}>
                {runtime && (
                  <AttributeContainer>
                    <Attribute
                      label="Runtime"
                      value={`${Math.round(runtime / 60)}hrs`}
                    />
                  </AttributeContainer>
                )}
                {releaseDate && (
                  <AttributeContainer>
                    <Attribute
                      label="Release Date"
                      value={format(new Date(releaseDate), "do, MMM yyyy")}
                    />
                  </AttributeContainer>
                )}
                {lang && (
                  <AttributeContainer>
                    <Attribute label="Language" value={ISO6391.getName(lang)} />
                  </AttributeContainer>
                )}
              </AttributesContainer>
            )}
          </GenresContainer>
        </TitleRow1>
        {/* </TitleRow2> */}
      </Title>
    </TitleWrapper>
  );
};

export default DetailsTitle;
