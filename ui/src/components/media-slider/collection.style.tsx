import Styled from "styled-components";
import { CardSize } from "../../models/CardSize";
import { animated } from "react-spring";

export const MoviesContainer = Styled(animated.div)<{
  selected?: number;
  size?: CardSize;
  slider?: number;
  expandFull?: number;
}>`
  ${({ expandFull, size }) =>
    expandFull
      ? `grid-template-rows: repeat(3, 300px);`
      : `grid-template-rows: repeat(1, 300px);`};
  align-content: center;
  display: grid;
  grid-auto-flow: column;
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  height: 100%;
  justify-content: start;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  scroll-behavior: smooth;
  width: 100%;
  grid-template-columns: repeat(auto-fit, 200px);
`;

export const MoviesControl = Styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`;

export const MoviesControlItem = Styled.li`
  color: white;
`;

export const ScrollButton = Styled.button`
  background: rgba(0,0,0, .9);
  border: none;
  cursor: pointer;
  height: 100%;
  outline: none;
  position: absolute;
  width: 3rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
`;

export const ScrollLeft = Styled(ScrollButton)`
  left: 0;
`;

export const ScrollRight = Styled(ScrollButton)`
  right:0;
`;

export const MoviesWrapper = Styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;
