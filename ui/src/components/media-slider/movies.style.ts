import styled from "styled-components";
import { CardSize } from "../../models/CardSize";
import { animated } from "react-spring";
import { responsiveProps } from './../../effects/useResponsive';

const getRowHeight = (props?: responsiveProps) => {
  if (!props) {
    return 200;
  };

  if (props.isBigScreen) {
    return 280;
  } else if (props.isDesktopOrLaptop) {
    return 200;
  } else if (props.isTabletOrMobile) {
    return 180;
  }
}

const getColumnWidth = (props?: responsiveProps) => {
  if (!props) {
    return 150;
  };

  if (props.isTabletOrMobile) {
    return 130;
  } else if (props.isBigScreen) {
    return 180;
  } else if (props.isDesktopOrLaptop) {
    return 150;
  }
}

export const MoviesContainer = styled(animated.div) <{
  selected?: number;
  size?: CardSize;
  slider?: number;
  expandFull?: number;
  columns?: number;
  resxProps?: responsiveProps
}>`
  ${({ expandFull, size, resxProps }) =>
    expandFull
      ? `grid-template-rows: repeat(2, ${getRowHeight(resxProps)}px);`
      : `grid-template-rows: repeat(1, ${getRowHeight(resxProps)}px);`};
  align-content: flex-start;
  color: red;
  display: grid;
  grid-auto-flow: row;
  ${p => p.resxProps?.isBigScreen ? "grid-column-gap: .5rem" : ""};
  ${p => p.resxProps?.isBigScreen ? "grid-row-gap: .1rem" : "grid-row-gap: .75rem"};
  grid-template-columns: repeat(${p => p.columns}, ${p => getColumnWidth(p.resxProps)}px);
  height: 100%;
  justify-content: space-evenly;
  overflow-y: hidden;
  position: relative;
  scroll-behavior: smooth;
  width: 100%;
  padding: .1rem 0;
`;