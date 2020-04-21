import styled from 'styled-components';
import { animated } from 'react-spring';

export const PosterWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const CardImage = styled.img<{hide?: boolean}>`
  max-height: 100%;
  max-width: 100%;
`;

export const CardImageWrapper = styled(animated.div)<{ selected?: boolean }>`
  height: 100%;
  display: flex;
  align-items: ${(p) => (p.selected ? "flex-start" : "center")};
  justify-content: center;
`;

export const CardRating = styled.span`
  font-family: "Poppins";
  font-weight: 500;
  font-size: 1rem;
  background: rgba(204,0,0,0.95);
  color: #fff;
  margin-left: auto;
  min-width: 2rem;
  height: 1.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: .2rem;
  margin-right: .2rem;
  position: absolute;
  top: .85rem;
  right: -.5rem;
  box-shadow: -1px 1px 4px 2px rgba(0,0,0,0.5);
  border-top-left-radius: .3rem;
  border-bottom-left-radius: .3rem;
`;