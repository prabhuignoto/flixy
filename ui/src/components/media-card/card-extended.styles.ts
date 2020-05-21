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
  background: #e2e2e2;
  top: 0%;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 20px 10px rgba(0,0,0,0.5);
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