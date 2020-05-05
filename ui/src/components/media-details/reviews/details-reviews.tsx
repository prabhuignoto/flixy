import React from "react";
import ReviewModel from "../../../models/Review";
import {
  ReviewsWrapper,
  ReviewWrapper,
  ReviewContent,
  ReviewAuthor,
  ReviewsContainer,
  ReviewsHeader,
  ReadMoreControl,
  ReviewText,
  GradientCover,
} from "./details-reviews.style";
import { Scrollbars } from "react-custom-scrollbars";
import { useTrail, config } from "react-spring";

interface ReviewsModel {
  items: ReviewModel[];
}

const Reviews: React.FunctionComponent<ReviewsModel> = ({ items }) => {
  const trail = useTrail(items.length, {
    opacity: 1,
    from: {
      opacity: 0,
    },
    config: config.gentle,
  });

  return (
    <ReviewsContainer>
      <ReviewsHeader>Reviews</ReviewsHeader>
      <Scrollbars>
        <ReviewsWrapper>
          {trail.map((props, index) => {
            const { content, author, id } = items[index];
            return (
              <Review
                content={content}
                author={author}
                id={id}
                key={id}
                style={props}
                index={index}
              />
            );
          })}
        </ReviewsWrapper>
      </Scrollbars>
    </ReviewsContainer>
  );
};

const Review: React.FunctionComponent<ReviewModel> = ({
  content,
  author,
  id,
  style,
  index = null,
}) => {
  const textRef = React.useRef<HTMLDivElement>(null);

  const [showReadMore, setShowReadMore] = React.useState(false);
  const [showFullText, setShowFullText] = React.useState(false);

  React.useEffect(() => {
    const node = textRef && textRef.current;

    if (node) {
      const scrollHeight = node.scrollHeight;

      if (scrollHeight > 150) {
        setShowReadMore(true);
      }
    }
  }, []);

  return (
    <ReviewWrapper key={id}>
      <ReviewsHeader>
        {/* <ReviewHeaderIcon>
          <HashIcon></HashIcon>
        </ReviewHeaderIcon>
        <span>{index !== null && index + 1}</span> */}
        <ReviewAuthor>{`${author}`}</ReviewAuthor>
      </ReviewsHeader>
      <ReviewContent style={style}>
        <ReviewText ref={textRef} showFull={showFullText}>
          {content}
        </ReviewText>
        {showReadMore && !showFullText && <GradientCover></GradientCover>}
      </ReviewContent>
      {showReadMore && (
        <ReadMoreControl onClick={() => setShowFullText(!showFullText)}>
          {showFullText ? "Read Less" : "Read More..."}
        </ReadMoreControl>
      )}
    </ReviewWrapper>
  );
};

export default Reviews;
