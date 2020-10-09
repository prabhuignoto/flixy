import { animated } from 'react-spring';
import { responsiveProps } from '../../effects/useResponsive';
import { CardSize } from '../../models/CardSize';
import emotion from "@emotion/styled";

export const PosterWrapper = emotion.div<{ size?: CardSize }>`
  height: 100%;
  `;

export const CardImage = emotion(animated.img) <{ hide?: boolean }>`
  border-radius: .2rem;
  color: #191919;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
  transition: filter .1s linear;
  width: 100%;
  &:hover {
    filter: drop-shadow(0 0 10px #323232) brightness(1.2);
  }
`;

export const CardImageWrapper = emotion(animated.div) <{ selected?: boolean }>`
  align-items: ${(p) => (p.selected ? "flex-start" : "center")};
  display: flex;
  height: 100%;
  position: relative;
  justify-content: center;
  width: 100%;
`;

export const CardRating = emotion.span`
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

export const Star = emotion.div<{ resx?: responsiveProps }>`
  ${p => p.resx?.isBigScreen ?
    `width: 3.5rem;
  height: 2.5rem;` :
    `width: 2rem;
  height: 2rem;`};
  display: flex;
  align-items: center;
  position: absolute;
  ${p => p.resx?.isBigScreen ?
    `top: 1rem; right: 0;` :
    `top: 0rem; right: 0`
  };
  justify-content: center;
  border-radius: 50%;
  filter: drop-shadow(0 0 4px #000);

  & svg {
    width: 80%;
    height: 80%;
  }
`;