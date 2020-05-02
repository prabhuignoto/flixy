import React from "react";
import { Title, TitleWrapper, DetailsRatingContainer } from "./details-title.style";
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
  return <TitleWrapper>
      <DetailsRatingContainer>
        <DetailsRating rating={rating}/>
      </DetailsRatingContainer>
      <Title>{`${title}`}</Title>
    </TitleWrapper> ;
};


export default DetailsTitle;