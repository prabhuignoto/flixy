import styled from "styled-components";
import { CardSize } from "../../models/CardSize";
import { animated } from "react-spring";

export const MoviesContainer = styled(animated.div)<{
  selected?: number;
  size?: CardSize;
  slider?: number;
  expandFull?: number;
  columns?: number;
}>`
  ${({ expandFull, size }) =>
    expandFull
      ? `grid-template-rows: repeat(3, 300px);`
      : `grid-template-rows: repeat(1, 300px);`};
  align-content: flex-start;
  color: red;
  display: grid;
  grid-auto-flow: row;
  grid-column-gap: 1.25rem;
  grid-row-gap: 1.25rem;
  grid-template-columns: repeat(${p => p.columns}, 200px);
  height: 100%;
  justify-content: center;
  overflow-x: hidden;
  overflow-y: hidden;
  position: relative;
  scroll-behavior: smooth;
  width: 100%;
`;