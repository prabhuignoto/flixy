import styled from "styled-components";
import { animated } from "react-spring";

export const ReviewsWrapper = styled.ul`
  color: #fff;
  display: flex;
  flex-direction: column;
  font-family: "Poppins";
  height: 95%;
  list-style: none;
  margin: 0;
  padding:0;
`;

export const ReviewWrapper = styled(animated.li)`
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  position: relative;
  width: 100%;
`;

export const ReviewContent = styled(animated.div)`
  font-size: 0.85rem;
  font-weight: 300;
  overflow: hidden;
  position: relative;
  text-align: left;
  width: 100%;
  color: #bdbdbd;
`;

export const ReviewAuthor = styled.div`
  font-size: .9rem;
  font-weight: 400;
  text-align: left;
  width: 100%;
`;

export const ReviewsContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 .5rem 0 1rem;
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

export const ReviewText = styled.p<{showFull?: boolean}>`
  ${p => !p.showFull ? 'max-height: 150px;': 'max-height: 2000px'};
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
`;

export const GradientCover = styled.span`
  background: linear-gradient(0deg, #191919 0%,  rgba(25,25,25, .35) 100%);
  bottom: 0;
  height: 3.5rem;
  position: absolute;
  width: 100%;
`;

export const ReviewHeader = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: .1rem;
`;

export const ReviewHeaderIcon = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  display: flex;
  & svg {
    width: 100%;
    height: 100%;
  }
`;