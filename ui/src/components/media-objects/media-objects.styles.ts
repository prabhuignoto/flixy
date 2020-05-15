import { animated } from 'react-spring';
import styled from "styled-components";
import { ThumbnailSize } from '../../models/MediaObject';

export const ObjectsContainer = styled.section<{ height?: number }>`
  align-items: center;
  background: #111;
  border-radius: .2rem;
  display: flex;
  height: ${p => p.height}px;
  justify-content: center;
  padding: 0;
  position: relative;
  width: 100%;
`;

export const ObjectsWrapper = styled.ul<{ columns?: number, leftButton?: boolean, rightButton?: boolean }>`
  align-items: center;
  box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,.5), inset -25px 0px 25px -25px rgba(0,0,0,0.5);
  display: flex;
  height: 100%;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
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

export const MediaObjectContainer = styled(animated.div)``;
