import { animated } from 'react-spring';
import styled from "styled-components";

export const ObjectsContainer = styled.section`
  align-items: center;
  background: black;
  border-radius: .2rem;
  display: flex;
  height: 100%;
  padding: 0;
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
`

export const ObjectHeader = styled.header`
  align-self: flex-start;
  color:  rgba(204,0,0,1);
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: .25rem;
  padding-left: 3rem;
`;

export const Scroll = styled.div<{ disable?: boolean }>`
  align-items: center;
  background: rgba(0,0,0,0.85);
  cursor: pointer;
  display: flex;
  height: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 2.5rem;
  z-index: 1;
  ${p => p.disable && "display: none;"}

  & svg {
    width: 100%;
  }
`;

export const ScrollLeftBtn = styled(Scroll)`
  left: 0rem;
`;

export const ScrollRightBtn = styled(Scroll) `
  right: 0rem;
`;

export const MediaObjectContainer = styled(animated.div)``;
