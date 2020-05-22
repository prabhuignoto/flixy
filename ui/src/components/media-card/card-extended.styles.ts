import styled from "styled-components";
import {animated} from "react-spring";

export const CardExtendedWrapper = styled(animated.div)<{isBigScreen?: boolean}>`
  display: flex;
  position: absolute;
  left: 0;
  margin-left:auto;
  margin-right: auto;
  z-index: 9999;
  transform-origin: center;
  background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(255,255,255,.95) 100%);
  top: 0%;
  align-items: center;
  justify-content: flex-start;
  box-shadow: 0 0 25px 12px rgba(0,0,0,0.2);
  height: ${p => p.isBigScreen ? "250px" : "195px"};
  padding: .2rem;
  width: ${p => p.isBigScreen ? "320px" : "280px"};;
`;

export const CardExtendedPosterWrapper = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const CardExtendedPoster = styled.img`
  max-height: 100%;
  /* width: 165px; */
  object-fit: contain;
`;

export const CardExtendedInfo = styled.div`
  width: calc(100% - 165px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1rem;
`;

export const ExtendedInfoTitle = styled.span`
  font-family: "Poppins";
  font-weight: 400;
  font-size: 1rem;
  color: #000;
  white-space: wrap;
  text-align: left;
  width: 100%;
`;

export const ExtendInfoYear = styled.span`
  font-family: "Poppins";
  font-weight: 300;
  font-size: .9rem;
  color: #000;
  margin-top: .25rem;
`;