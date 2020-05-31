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
`;

export const ObjectImage = styled(animated.img) <{ loaded?: boolean, noTitle?: boolean }>`
  border-radius: .25rem;
  display: ${p => p.loaded ? "block" : "none"};
  margin-top: ${p => !p.noTitle ? "auto" : ""};
  max-height: ${p => p.noTitle ? "100%" : "80%"};
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

export const ObjectName = styled.span<{resx?: responsiveProps}>`
  color: #000;
  font-family: "Poppins";
  font-size: ${p => p.resx?.isBigScreen ? ".8rem" :".7rem"};
  font-weight: 500;
  height: 10%;
  margin-bottom: .5rem;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

const placeholderShimmer = keyframes`
 from {
   background-position: -200px 0;
 }
 to {
  background-position: 200px 0; 
 }
`;

export const Shimmer = styled.div`
   background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 20%, #f6f7f8 40%, #f6f7f8 100%);
   animation: ${placeholderShimmer} 2s linear infinite;
   width: 85%; 
   height: 80%;
   background-size: 400px 104px; 
`;
