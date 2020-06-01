import styled from "styled-components";
import { animated } from 'react-spring';

export const MediaToggleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: .25rem;
  /* background: #252525; */
  cursor: pointer;
`;

export const ToggleHighlight = styled.div`
`;

export const Option = styled.div<{ selected?: boolean }>`
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 1rem;
  padding: 0 .5rem;
  font-family: Poppins;
  font-weight: 400;
  font-size: 1rem;
  text-transform: uppercase;
  /* background: ${p => p.selected ? "#fff" : "#191919"}; */
  z-index: 1;
  & svg {
    height: 80%;
  }
  
  & span {
    margin-left: .35rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  `;

export const Highlighter = styled(animated.span) <{ left?: number }>`
  border-radius: .25rem;
  position: absolute;
  height: 100%;
  background-color: #cc0000;
  box-shadow: inset 0px 0px 10px 1px rgba(0,0,0,0.2);
  min-width: 2rem;
  display: block;
  left: ${p => p.left}px;
  z-index: 0;
`;