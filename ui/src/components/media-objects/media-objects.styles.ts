import { animated } from 'react-spring';
import styled from "styled-components";
import { ThumbnailSize } from '../../models/MediaObject';

export const ObjectsContainer = styled.section<{ height?: number, noBackground?: boolean }>`
  align-items: center;
  background: ${p => !p.noBackground ? "#1d1d1d" :""};
  border-radius: .25rem;
  display: flex;
  height: ${p => p.height}px;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const ObjectsWrapper = styled.ul<{ columns?: number, leftButton?: boolean, rightButton?: boolean }>`
  align-items: flex-start;
  box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,.5), inset -25px 0px 25px -25px rgba(0,0,0,0.5);
  display: flex;
  flex-direction: column;
  height: 100%;
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
  display: ${p => p.disable ? "none" : "flex"};
  align-items: center;
  cursor: pointer;
  height: 100%;
  width: ${p => p.size === ThumbnailSize.large ? "3rem" : "2.5rem"};

  & svg {
    width: 100%;
  }
`;

export const ScrollLeftBtn = styled(Scroll)`
  width: 5%;
  margin-right: auto;
`;

export const ScrollRightBtn = styled(Scroll)`
  width: 5%;
  margin-left: auto;
`;


export const ObjectHeader = styled.div`
  font-size: .95rem;
  color: #cc0000;
  font-weight: 500;
  padding-left: 1rem;
  padding-top: .5rem;
  padding-bottom: .75rem;
`;

export const MediaObjectContainer = styled(animated.div)``;