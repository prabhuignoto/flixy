import styled from 'styled-components';
import { animated } from 'react-spring';
import { CardSize } from '../../models/CardSize';

export const PosterWrapper = styled.div<{size?: CardSize}>`
  height: 100%;
  width: 100%;
`;

export const CardImage = styled.img<{hide?: boolean}>`
  max-height: 100%;
  max-width: 100%;
`;

export const CardImageWrapper = styled(animated.div)<{ selected?: boolean }>`
  align-items: ${(p) => (p.selected ? "flex-start" : "center")};
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const CardRating = styled.span`
  align-items: center;
  background: rgba(204,0,0,0.95);
  border-bottom-left-radius: .3rem;
  border-top-left-radius: .3rem;
  box-shadow: -1px 1px 4px 2px rgba(0,0,0,0.5);
  color: #fff;
  display: flex;
  font-family: "Poppins";
  font-size: 1rem;
  font-weight: 500;
  height: 1.75rem;
  justify-content: center;
  margin-left: auto;
  margin-right: .2rem;
  margin-top: .2rem;
  min-width: 2rem;
  position: absolute;
  right: -.5rem;
  top: .85rem;
`;