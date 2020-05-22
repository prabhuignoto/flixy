import styled from "styled-components";
import { animated } from "react-spring";

export const CardExtendedWrapper = styled(animated.div) <{ isBigScreen?: boolean, flip?: boolean }>`
  ${p => p.flip ? "right: 0" : "left: 0"};
  align-items: center;
  /* background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(255,255,255,.97) 100%); */
  background: #e7e7e7;
  box-shadow: 0 0 25px 12px rgba(0,0,0,0.4);
  display: flex;
  height: ${p => p.isBigScreen ? "255px" : "195px"};
  justify-content: flex-start;
  margin-left:auto;
  margin-right: auto;
  padding: .2em;
  position: absolute;
  top: 0;
  width: ${p => p.isBigScreen ? "500px" : "400px"};
  z-index: 9999;
`;

export const CardExtendedPosterWrapper = styled.div<{ flip?: boolean }>`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  order: ${p => p.flip ? 2 : 1};
`;

export const CardExtendedPoster = styled.img`
  max-height: 100%;
  /* width: 165px; */
  object-fit: contain;
`;

export const CardExtendedInfo = styled.div<{ flip?: boolean }>`
  width: calc(100% - 165px);
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 1em;
  order: ${p => p.flip ? 1 : 2};
`;

export const ExtendedInfo = styled.span`
  font-family: "Poppins";
  color: #000;
  white-space: wrap;
  text-align: left;
  width: 100%;
`;

export const ExtendedInfoTitle = styled(ExtendedInfo)`
  font-weight: 500;
  font-size: 1em;
`;

export const ExtendInfoYear = styled(ExtendedInfo)`
  font-weight: 400;
  font-size: .9em;
  margin-top: .1em;
  color: #cc0000;
`;

export const ExtendedInfoOverview = styled(ExtendedInfo)`
  margin-top: .25em;
  font-weight: 400;
  font-size: .75em;
  text-overflow: ellipsis;
  overflow: hidden;
`;

// export const 