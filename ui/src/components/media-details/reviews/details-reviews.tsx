import React from "react";
import ReviewModel from "../../../models/Review";
import {
  ReviewsWrapper,
  ReviewsContainer,
  ReviewsHeader,
} from "./details-reviews.style";
import { Scrollbars } from "react-custom-scrollbars";
import Review from "./details-review";
import { useSpring } from "react-spring";

interface ReviewsModel {
  items: ReviewModel[];
  id?: number | string;
}

const Reviews: React.FunctionComponent<ReviewsModel> = React.memo(
  ({ items }) => {
    const props = useSpring({
      opacity: 1,
      from: {
        opacity: 0
      }
    })
    return (
      <ReviewsContainer style={props}>
        {/* <ReviewsHeader>Reviews</ReviewsHeader> */}
        <Scrollbars>
          <ReviewsWrapper>
            {items.map(({ content, author, id }, index) => {
              return (
                <Review
                  content={content}
                  author={author}
                  id={id}
                  key={id}
                  index={index}
                />
              );
            })}
          </ReviewsWrapper>
        </Scrollbars>
      </ReviewsContainer>
    );
  },
  (prev, cur) => prev.id === cur.id
);

export default Reviews;
