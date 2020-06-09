import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";
import { responsiveProps } from "../../effects/useResponsive";

export const MediaObject = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin: 0 .5rem;
  cursor: pointer;
`;

export const ObjectImage = styled(animated.img) <{ loaded?: number, noTitle?: number }>`
  display: ${p => p.loaded ? "block" : "none"};
  margin-top: ${p => !p.noTitle ? "auto" : ""};
  max-height: 95%;
  max-width: 100%;
  object-fit: contain;
  `;

export const FallbackImage = styled(animated.div) <{ failed?: boolean }>`
  align-items: center;
  border-radius: .25rem;
  display: flex;
  height: 80%;
  justify-content: center;
  margin-top: auto;
  & svg {
    height: 3rem;
    width: 3rem;
  }
  `;

export const ObjectName = styled.span<{ resx?: responsiveProps }>`
  color: #000;
  font-family: "Poppins";
  font-size: ${p => p.resx?.isBigScreen ? ".75rem" : ".65rem"};
  font-weight: 400;
  height: 10%;
  margin-bottom: .5rem;
  /* margin-top: auto; */
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
  background: #ededed;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const placeholderShimmer = keyframes`
 from {
   background-position: -200px 0;
  }
  to {
    background-position: 200px 0; 
  }
  `;

export const ImageContainer = styled.div<{ noTitle?: number }>`
  height: ${p => p.noTitle ? "100%" : "85%"};
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background : ${p => !p.noTitle ? "#ededed" : ""};
  `;

export const ImageInfo = styled.div<{ resx?: responsiveProps }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  min-width: 100px;
  min-height: 1.5rem;
  background: #ededed;
  color: #000;
  font-family: Poppins;
  font-size: ${p => p.resx?.isBigScreen ? ".7rem" : ".6rem"};
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
`