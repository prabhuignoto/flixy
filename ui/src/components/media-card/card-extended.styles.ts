import styled from "styled-components";
import {animated} from "react-spring";

export const CardExtendedWrapper = styled(animated.div)`
  display: flex;
  position: absolute;
  left: 0;
  margin-left:auto;
  margin-right: auto;
  z-index: 9999;
  transform-origin: center;
  background: #e8e8e8;
  top: 0%;
  align-items: center;
  justify-content: flex-start;
  /* box-shadow: inset 0 0 25px 12px rgba(0,0,0,0.2); */
  height: 260px;
  padding: .2rem;
  width: 450px;
`;

export const CardExtendedPosterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  width: 70%;
`;

export const CardExtendedPoster = styled.img`
  max-height: 100%;
  max-width: 100%;
`;