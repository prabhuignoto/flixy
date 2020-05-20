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
  padding:0 .5rem;
`;

export const ReviewsContainer = styled(animated.div)`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 0 .5rem 0 1rem;
  width: 100%;
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