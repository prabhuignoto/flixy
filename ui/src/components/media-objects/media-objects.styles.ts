import { animated } from 'react-spring';
import styled from "styled-components";
import { ThumbnailSize } from '../../models/MediaObject';

export const ObjectsContainer = styled.section<{ height?: number }>`
  align-items: center;
  background: #111;
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
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
  width: 100%;
`;

export const Scroll = styled.div<{ disable?: boolean, size?: ThumbnailSize }>`
  ${p => p.disable && "display: none;"}
  align-items: center;
  background: #111;
  cursor: pointer;
  display: flex;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${p => p.size === ThumbnailSize.large ? "3.25rem" : "2.5rem"};
  z-index: 1;

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
