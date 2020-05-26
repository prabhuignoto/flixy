import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";

export const MoviesControl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`;

export const MoviesControlItem = styled.li`
  color: white;
`;

export const ScrollButton = styled.button<{ resxProps?: responsiveProps }>`
  background: transparent;
  border: none;
  cursor: pointer;
  height: 100%;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 1;
  width: ${p => p.resxProps?.isBigScreen ? "4rem" : "3rem"};
`;

export const ScrollLeft = styled(ScrollButton)<{ loading?: boolean }>`
  left: 0px;
  ${(p) => (p.loading ? "pointer-events: none;" : "")};
`;

export const ScrollRight = styled(ScrollButton)<{ loading?: boolean }>`
  right: 0px;
  ${(p) => (p.loading ? "pointer-events: none;" : "")}
`;

export const MoviesWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const DetailsCardContainer = styled.div``;
