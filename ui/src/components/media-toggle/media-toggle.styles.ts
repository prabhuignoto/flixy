import styled from "styled-components";
import { animated } from 'react-spring';

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

export const Option = styled.div<{ selected?: boolean }>`
  align-items: center;
  display: flex;
  flex: 1;
  font-family: Poppins;
  font-size: 1rem;
  font-weight: 400;
  height: 100%;
  justify-content: center;
  margin: 0 1rem;
  padding: 0 .5rem;
  text-transform: uppercase;
  z-index: 1;
  & svg {
    height: 80%;
  }
  
  & span {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: .35rem;
  }
  `;

export const Highlighter = styled(animated.span) <{ left?: number }>`
  background-color: #cc0000;
  border-radius: .25rem;
  box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,0.2);
  display: block;
  height: 100%;
  left: ${p => p.left}px;
  min-width: 2rem;
  position: absolute;
  z-index: 0;
`;