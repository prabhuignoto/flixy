import React from "react";
import {
  Title,
  TitleWrapper,
  DetailsRatingContainer,
  TitleYear,
  TitleText,
  TitleRow1,
  TitleRow2,
  GenresContainer,
  AttributeContainer,
  AttributesContainer,
} from "./details-title.style";
import DetailsRating from "../rating/details-rating";
import { format } from "date-fns";
import ISO6391 from "iso-639-1";

import Genres from "../../media-genres/genres";

import Attribute from "../attribute/details-attribute";
import { Genre } from "../../../models/Genre";
import { useMediaQuery } from "react-responsive";

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
  return (
    <TitleWrapper>
      <Title>
        <TitleRow1>
          {rating && (
            <DetailsRatingContainer>
              <DetailsRating rating={rating} />
            </DetailsRatingContainer>
          )}
          <TitleText>{`${title}`}</TitleText>
          <TitleYear>{`${year ? new Date(year).getFullYear() : ""}`}</TitleYear>
        </TitleRow1>
        <TitleRow2>
          <GenresContainer>
            {genres && <Genres items={genres} />}
            <AttributesContainer>
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
          </GenresContainer>
        </TitleRow2>
      </Title>
    </TitleWrapper>
  );
};

export default DetailsTitle;
