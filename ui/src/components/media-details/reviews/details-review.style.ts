import styled from "styled-components";
import { animated } from "react-spring";

export const ReviewWrapper = styled(animated.li)`
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  position: relative;
  width: 100%;
`;

export const ReviewContent = styled(animated.div)`
  color: #bdbdbd;
  font-size: .95rem;
  font-weight: 300;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
`;

export const ReviewAuthor = styled.div`
  font-size: .9rem;
  font-weight: 400;
  text-align: left;
  width: 100%;
`;

export const ReadMoreControl = styled.div`
  align-items: center;
  bottom: .25rem;
  color: rgba(204,0,0,0.9);
  cursor: pointer;
  display: flex;
  font-size: .8rem;
  font-weight: 400;
  height: 1.5rem;
  justify-content: flex-start;
  width: 100%;
`;

export const ReviewText = styled.p<{ showFull?: boolean }>`
  ${p => !p.showFull ? 'max-height: 150px;' : 'max-height: 2000px'};
  align-items: flex-start;
  display: flex;
  justify-content: flex-start;
  margin: 0;
`;

export const GradientCover = styled.span`
  background: linear-gradient(0deg, #111 0%,  rgba(25,25,25, .2) 100%);
  bottom: 0;
  height: 3.5rem;
  position: absolute;
  width: 100%;
`;

export const ReviewHeader = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: .1rem;
`;

export const ReviewHeaderIcon = styled.span`
  display: flex;
  height: 1.25rem;
  width: 1.25rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ReviewsHeader = styled.header`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.25rem;
  font-weight: 500;
  height: 2rem;
  margin-top: .5rem;
`;