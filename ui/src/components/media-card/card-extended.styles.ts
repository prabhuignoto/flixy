import styled from "styled-components";
import { animated } from "react-spring";

export const CardExtendedWrapper = styled(animated.div) <{ isBigScreen?: boolean, flip?: boolean }>`
  ${p => p.flip ? "right: 0" : "left: 0"};
  /* background: linear-gradient(90deg, rgba(232,232,232,1) 0%, rgba(255,255,255,.97) 100%); */
  align-items: center;
  background: #e7e7e7;
  box-shadow: 0 0 25px 12px rgba(0,0,0,0.4);
  cursor: pointer;
  display: flex;
  height: ${p => p.isBigScreen ? "255px" : "195px"};
  justify-content: flex-start;
  margin-left:auto;
  margin-right: auto;
  outline: 0;
  padding: .2em;
  position: absolute;
  top: 0;
  width: ${p => p.isBigScreen ? "500px" : "400px"};
  z-index: 9999;
`;

export const CardExtendedPosterWrapper = styled.div<{ flip?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  order: ${p => p.flip ? 2 : 1};
`;

export const CardExtendedPoster = styled.img`
  /* width: 165px; */
  max-height: 100%;
  object-fit: contain;
`;

export const CardExtendedInfo = styled.div<{ flip?: boolean }>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  order: ${p => p.flip ? 1 : 2};
  padding: 1em;
  width: calc(100% - 165px);
  ${p => p.flip ? "padding-left: 2rem" : ""};
`;

export const ExtendedInfo = styled.span`
  color: #000;
  font-family: "Poppins";
  text-align: left;
  white-space: wrap;
  width: 100%;
`;

export const ExtendedInfoTitle = styled(ExtendedInfo)`
  font-size: 1em;
  font-weight: 500;
`;

export const ExtendInfoYear = styled(ExtendedInfo)`
  color: #cc0000;
  font-size: .9em;
  font-weight: 400;
  margin-top: .1em;
`;

export const ExtendedInfoOverview = styled(ExtendedInfo)`
  font-size: .75em;
  font-weight: 400;
  margin-top: .25em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ExtendedInfoClose = styled.span<{flip?: boolean}>`
  ${p => p.flip ? "left: 0" : "right: 0"};
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  position: absolute;
  top: 0;
  width: 1.5rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;