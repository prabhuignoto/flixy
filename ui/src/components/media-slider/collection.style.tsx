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
  border-radius: 50%;
  cursor: pointer;
  height: ${p => p.resxProps?.isBigScreen ? "2.5rem" : "1.75rem"};
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 100;
  width: ${p => p.resxProps?.isBigScreen ? "2.5rem" : "1.75rem"};
  padding: 0;
`;

export const ScrollLeft = styled(ScrollButton)<{ loading?: boolean }>`
  left: ${p => p.resxProps?.isBigScreen ? "-2.5rem" : "-1.5rem"};
  ${(p) => (p.loading ? "pointer-events: none;" : "")};
`;

export const ScrollRight = styled(ScrollButton)<{ loading?: boolean }>`
  right: ${p => p.resxProps?.isBigScreen ? "-2.5rem" : "-1.5rem"};
  ${(p) => (p.loading ? "pointer-events: none;" : "")}
`;

export const MoviesWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DetailsCardContainer = styled.div``;
