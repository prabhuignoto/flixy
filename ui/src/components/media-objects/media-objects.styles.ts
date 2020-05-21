import { animated } from 'react-spring';
import styled from "styled-components";
import { ThumbnailSize } from '../../models/MediaObject';

export const ObjectsContainer = styled.section<{ height?: number, noBackground?: boolean }>`
  align-items: center;
  background: ${p => !p.noBackground ? "#dbdbdb" : ""};
  border-radius: .25rem;
  display: flex;
  height: ${p => p.height}px;
  justify-content: center;
  padding: .5rem 0;
  position: relative;
  width: 100%;
  user-select: none;
`;

export const ObjectsWrapper = styled.ul<{
  columns?: number,
  leftButton?: boolean,
  rightButton?: boolean,
  noBackground?: boolean
}>`
  // box-shadow: ${p => !p.noBackground ? "inset 25px 0px 25px -25px rgba(0,0,0.2), inset -25px 0px 25px -25px rgba(0,0,0,0.2)" : ""};
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  padding: 0 .5rem;
  padding: 0;
  scroll-behavior: smooth;
  width: ${ ({ leftButton, rightButton }) => {
    if (leftButton && rightButton) {
      return "100%"
    } else if (leftButton || rightButton) {
      return "95%"
    } else {
      return "90%"
    }
  }};
`;

export const Scroll = styled.div<{ disable?: boolean, size?: ThumbnailSize }>`
  align-items: center;
  cursor: pointer;
  display: ${p => p.disable ? "none" : "flex"};
  height: 100%;
  width: ${p => p.size === ThumbnailSize.large ? "3rem" : "2.5rem"};
  & svg {
    width: 100%;
  }
`;

export const ScrollLeftBtn = styled(Scroll)`
  margin-right: auto;
  width: 5%;
`;

export const ScrollRightBtn = styled(Scroll)`
  margin-left: auto;
  width: 5%;
`;


export const ObjectHeader = styled.div`
  color: #cc0000;
  font-size: .95rem;
  font-weight: 500;
  padding-bottom: .5rem;
  padding-left: 1rem;
`;

export const MediaObjectContainer = styled(animated.div)``;