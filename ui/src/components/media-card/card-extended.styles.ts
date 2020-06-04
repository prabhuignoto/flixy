import styled from "styled-components";
import { animated } from "react-spring";

export const CardExtendedWrapper = styled(animated.div) <
  {
    isBigScreen?: number;
    flip?: number;
    autoHeight?: number;
    height?: number;
    position: { x: number; y: number }
  }>`
  align-items: center;
  background: #e7e7e7;
  border-radius: .2em;
  box-shadow: 0 0 20px 16px rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  height: ${p => {
    if (p.autoHeight) {
      return "100%";
    } else if (p.height) {
      return `${p.height}px`;
    } else {
      return p => p.isBigScreen ? "255px" : "195px";
    }
  }};
  justify-content: flex-start;
  margin-left:auto;
  margin-right: auto;
  outline: 0;
  padding: .2em;
  position: fixed;
  left: ${p => p.position.x}px;
  top: ${p => p.position.y - 2}px;
  width: ${p => p.isBigScreen ? "600px" : "480px"};
  z-index: 999;
  background: #e8e8e8;
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
  color: #000;
  font-family: "Poppins";
  text-align: left;
  white-space: wrap;
`;

export const ExtendedInfoTitle = styled(ExtendedInfo)`
  font-size: .85em;
  font-weight: 500;
  max-width: 350px;
  white-space: wrap;
`;

export const ExtendInfoYear = styled(ExtendedInfo)`
  color: #cc0000;
  font-size: .9em;
  font-weight: 400;
  margin-top: .1em;
`;

export const ExtendedInfoOverview = styled(ExtendedInfo) <{ isBigScreen?: boolean }>`
  font-size: ${p => p.isBigScreen ? ".8em" : ".7em"};
  font-weight: 300;
  margin-top: .5em;
  text-overflow: ellipsis;
  display: flex;
  flex: auto;
  width: 100%;
`;

export const ExtendedInfoClose = styled.span<{ flip?: boolean }>`
  cursor: pointer;
  display: flex;
  height: 1.5rem;
  margin-left: auto;
  width: 1.5rem;
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

export const ExtendedInfoRating = styled.div`
  margin-left: 1rem;
`;

export const Row2 = styled.div`
  display: flex;
  align-items: center;
`