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
  padding: 1rem 0;
  position: relative;
  width: 100%;
`;

export const ObjectsWrapper = styled.ul<{ columns?: number }>`
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  scroll-behavior: smooth;
  width: 95%;
  box-shadow: inset 25px 0px 25px -25px rgba(0,0,0,.5), inset -25px 0px 25px -25px rgba(0,0,0,0.5);
`;

export const Scroll = styled.div<{ disable?: boolean, size?: ThumbnailSize }>`
  ${p => p.disable && "display: none;"}
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  width: ${p => p.size === ThumbnailSize.large ? "3.25rem" : "2.5rem"};

  & svg {
    width: 100%;
  }
`;

export const ScrollLeftBtn = styled(Scroll)`
  left: 0rem;
`;

export const ScrollRightBtn = styled(Scroll)`
  right: 0rem;
`;

export const MediaObjectContainer = styled(animated.div)``;
