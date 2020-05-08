import {
  ReviewWrapper,
  ReviewsHeader,
  ReviewAuthor,
  ReviewContent,
  ReviewText,
  GradientCover,
  ReadMoreControl,
} from "./details-review.style";
import React from "react";
import {default as ReviewModel} from "../../../models/Review";

const Review: React.FunctionComponent<ReviewModel> = React.memo(({
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
}, (prev, current) => prev.id === current.id);

export default Review;
