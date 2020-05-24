import styled from "styled-components";
import { animated } from "react-spring";

export const CardExtendedWrapper = styled(animated.div) <{ isBigScreen?: boolean, flip?: boolean, autoHeight?: boolean }>`
  ${p => p.flip ? "right: 0" : "left: 0"};
  align-items: center;
  background: #e7e7e7;
  border-radius: .2em;
  /* box-shadow: 0 0 25px 16px rgba(0,0,0,0.7); */
  cursor: pointer;
  display: flex;
  height: ${p => {
    if(p.autoHeight) {
      return "100%";
    } else {
      return p => p.isBigScreen ? "255px" : "195px";
    }
  }};
  justify-content: flex-start;
  margin-left:auto;
  margin-right: auto;
  outline: 0;
  padding: .2em;
  position: absolute;
  top: 0;
  width: ${p => p.isBigScreen ? "680px" : "500px"};
  z-index: 999;
  background-image: linear-gradient(to left top, #383838, #303030, #282828, #202020, #191919);
`;

export const CardExtendedPosterWrapper = styled.div<{ flip?: boolean }>`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  flex: 1;
  order: ${p => p.flip ? 2 : 1};
`;

export const CardExtendedPoster = styled.img`
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
  padding: .5em .1em .5em .5em;
  flex: 3;
`;

export const ExtendedInfo = styled.span`
  color: #fff;
  font-family: "Poppins";
  text-align: left;
  white-space: wrap;
  width: 100%;
`;

export const ExtendedInfoTitle = styled(ExtendedInfo)`
  font-size: 1em;
  font-weight: 500;
  width: 100%;
`;

export const ExtendInfoYear = styled(ExtendedInfo)`
  color: #cc0000;
  font-size: .9em;
  font-weight: 400;
  margin-top: .1em;
`;

export const ExtendedInfoOverview = styled(ExtendedInfo)<{isBigScreen?: boolean}>`
  font-size: ${p => p.isBigScreen ? ".85em" : ".7em"};
  font-weight: 300;
  margin-top: .5em;
  text-overflow: ellipsis;
  display: flex;
  flex: auto;
`;

export const ExtendedInfoClose = styled.span<{ flip?: boolean }>`
  cursor: pointer;
  display: flex;
  height: 2rem;
  margin-left: auto;
  width: 2rem;
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ExtendedInfoHeader = styled.header`
  align-items: center;
  display: flex;
  width: 100%;
`;