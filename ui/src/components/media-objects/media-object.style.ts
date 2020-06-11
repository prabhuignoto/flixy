import styled, { keyframes } from "styled-components";
import { animated } from "react-spring";
import { responsiveProps } from "../../effects/useResponsive";

export const MediaObject = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 95%;
  justify-content: center;
  margin: 0 .5rem;
  cursor: pointer;
  border-radius: .25rem;
`;

export const ObjectImage = styled(animated.img) <{ loaded?: number, noTitle?: number }>`
  display: ${p => p.loaded ? "block" : "none"};
  margin-top: ${p => !p.noTitle ? "" : ""};
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  border-radius: .2rem;
  `;

export const FallbackImage = styled(animated.div) <{ failed?: boolean }>`
  align-items: center;
  display: flex;
  background: #f2f2f2;
  height: 100%;
  width: 100%;
  justify-content: center;
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
  background: rgba(237,237,237,1);
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  min-height: 1.5rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 .2rem;
  padding: 0 .2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  `;

export const ImageContainer = styled.div<{ noTitle?: number }>`
  height: ${p => p.noTitle ? "100%" : "100%"};
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background : ${p => !p.noTitle ? "" : ""};
  `;

export const ImageInfo = styled.div<{ resx?: responsiveProps, width: number }>`
  position: absolute;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  bottom: .5rem;
  width: ${p => p.width - 6}px;
  min-height: 1.5rem;
  background: rgba(255,255,255,1);
  color: #000;
  font-family: Poppins;
  font-size: ${p => p.resx?.isBigScreen ? ".8rem" : ".7rem"};
  font-weight: 400;
  display: ${p => p.width ? "flex" : "none"};
  align-items: center;
  justify-content: center;
  z-index: 100;
  padding: 0 .2rem;
`