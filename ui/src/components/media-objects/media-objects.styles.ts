import { animated } from 'react-spring';
import styled from "styled-components";
import { CardSize } from '../../models/CardSize';
import { ThumbnailSize } from '../../models/MediaObject';
import { responsiveProps } from '../../effects/useResponsive';

export const ObjectsContainer = styled.section<{ height?: number, noBackground?: boolean }>`
  align-items: center;
  background: ${p => !p.noBackground ? "#dbdbdb" : ""};
  border-radius: .25rem;
  display: flex;
  height: ${p => p.height}px;
  justify-content: center;
  user-select: none;
  width: 100%;
  position: relative;
`;

export const ObjectsWrapper = styled.ul<{
  columns?: number,
  leftButton?: boolean,
  rightButton?: boolean,
  noBackground?: boolean,
  resx?: responsiveProps
}>`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  padding: 0 .5rem;
  scroll-behavior: smooth;
  width: 100%;
`;

export const Scroll = styled.div<{ disable?: boolean, size?: ThumbnailSize, resx?: responsiveProps }>`
  align-items: center;
  display: flex;
  justify-content: center;
  cursor: pointer;
  height: 100%;
  ${p => {
    if (p.disable) {
      return `
        opacity: 0;
        pointer-events: none;
      `
    }
  }};
  width: ${p => {
    if (p.resx?.isBigScreen) {
      return "5%";
    } else if (p.resx?.isDesktopOrLaptop) {
      return "6%";
    } else {
      return "6%";
    }
  }};
  & svg {
    width: 100%;
    height: 100%;
  }
`;

export const ScrollLeftBtn = styled(Scroll)`
  margin-right: auto;
  ${p => !p.disable ? "box-shadow: 13px 0px 9px -15px #000;" : ""};
`;

export const ScrollRightBtn = styled(Scroll)`
  margin-left: auto;
  ${p => !p.disable ? "box-shadow: -13px 0px 9px -15px #000" : ""};
`;


export const ObjectHeader = styled.div`
  color: #cc0000;
  font-size: 1rem;
  font-weight: 500;
  padding-bottom: .25rem;
  padding-left: 1rem;
`;

export const MediaObjectContainer = styled(animated.div)`
  margin-right: .5rem;
`;

export const ExpandButton = styled.div`
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: -1rem;
  right: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  /* box-shadow:2px 2px 4px 2px rgba(0,0,0,0.25); */
  padding: 0;

  & svg {
    width: 100%;
    height: 100%;
  }
`;