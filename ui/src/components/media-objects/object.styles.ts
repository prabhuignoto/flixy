import styled from "styled-components";
import { animated } from 'react-spring';

export const ObjectsContainer = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  margin-left: -1rem;
  padding: .25rem 0;
  width: 100%;
`;

export const ObjectsWrapper = styled.ul<{columns?: number}>`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  overflow-x: hidden;
  padding: 0;
  scroll-behavior: smooth;
  width: 100%;
`;

export const Object = styled.li`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 10rem;
  width: 7rem;
`;

export const ObjectImage = styled.img<{loaded?: boolean}>`
  border-radius: .25rem;
  display: ${p => p.loaded ?  "block" : "none"};
  margin-top: auto;
  max-height: 80%;
  max-width: 100%;
  object-fit: contain;
`;

export const ObjectName = styled.span`
  color: #fff;
  font-family: "Poppins";
  font-size: .75rem;
  font-weight: 300;
  margin-top: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`;

export const FallbackImage = styled.div<{failed?: boolean}>`
  align-items: center;
  display: flex;
  height: 80%;
  justify-content: center;
  width: 6rem;
  & svg {
    width: 3rem;
    height: 3rem;
  }
  background: #2a2a2a;
  border-radius: .25rem;
  margin-top: auto;
`;

export const ObjectHeader = styled.header`
  color:  rgba(204,0,0,1);
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 300;
  margin-bottom: .25rem;
  padding-left: 1rem;
`;

export const MediaObjectContainer = animated.div;
