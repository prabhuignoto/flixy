import React from "react";
import {
  Title,
  TitleWrapper,
  DetailsRatingContainer,
  TitleYear,
  TitleText,
  TitleRow1,
  TitleRow2,
} from "./details-title.style";
import DetailsRating from "../rating/details-rating";

export interface DetailsTitleModel {
  year?: string;
  title?: string;
  rating?: number;
}

const DetailsTitle: React.FunctionComponent<DetailsTitleModel> = ({
  year,
  title,
  rating,
}) => {
  return (
    <TitleWrapper>
      <Title>
        <TitleRow1>
          <TitleText>{`${title}`}</TitleText>
          {rating && (
            <DetailsRatingContainer>
              <DetailsRating rating={rating} />
            </DetailsRatingContainer>
          )}
        </TitleRow1>
        <TitleRow2>
          <TitleYear>{`${year ? new Date(year).getFullYear() : ""}`}</TitleYear>
        </TitleRow2>
      </Title>
    </TitleWrapper>
  );
};

export default DetailsTitle;
