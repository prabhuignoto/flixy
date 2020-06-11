import styled from 'styled-components';
import {responsiveProps} from '../../effects/useResponsive';

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

export const ScrollButton = styled.button<{resxProps?: responsiveProps}>`
  background: transparent;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: ${(p) => (p.resxProps?.isBigScreen ? '2.5rem' : '1.75rem')};
  outline: none;
  padding: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: ${(p) => (p.resxProps?.isBigScreen ? '2.5rem' : '2rem')};
  z-index: 100;
`;

export const ScrollLeft = styled(ScrollButton)<{loading?: boolean}>`
  ${(p) => (p.loading ? 'pointer-events: none;' : '')};
  left: ${(p) => (p.resxProps?.isBigScreen ? '-2.5rem' : '-2rem')};
`;

export const ScrollRight = styled(ScrollButton)<{loading?: boolean}>`
  ${(p) => (p.loading ? 'pointer-events: none;' : '')}
  right: ${(p) => (p.resxProps?.isBigScreen ? '-2.5rem' : '-2rem')};
`;

export const MoviesWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: relative;
  width: 100%;
`;

export const DetailsCardContainer = styled.div``;
