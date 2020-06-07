import styled from "styled-components";
import { animated } from 'react-spring';
import { responsiveProps } from "../../effects/useResponsive";

export const MediaToggleWrapper = styled.div`
  align-items: center;
  border-radius: .25rem;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: space-around;
  position: relative;
  width: 100%;
`;

export const Option = styled.div<{ selected?: boolean, resx?: responsiveProps }>`
  align-items: center;
  color: #ffff;
  display: flex;
  flex: 1;
  font-family: Poppins;
  font-size: ${p => p.resx?.isBigScreen ? "1rem" : ".85rem"};
  font-weight: 400;
  height: 100%;
  justify-content: center;
  margin: 0 .5rem;
  padding: 0 .25rem;
  text-transform: capitalize;
  user-select: none;
  z-index: 1;
  & svg {
    height: 100%;
    width: ${p => p.resx?.isBigScreen ? "2rem" : "1.5rem"};
  }
  `;

export const OptionLabel = styled.div<{ marginLess?: boolean }>`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: ${p => p.marginLess ? "" : ".4rem"};
  text-transform: uppercase;
`;

export const Highlighter = styled(animated.span) <{ left?: number }>`
  background-color: #cc0000;
  border-radius: .25rem;
  box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,0.4);
  display: block;
  height: 100%;
  left: ${p => p.left}px;
  min-width: 2rem;
  position: absolute;
  z-index: 0;
`;