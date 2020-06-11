import styled from 'styled-components';
import { animated } from "react-spring";
import { LoadingState } from '../../models/Slider';
import { responsiveProps } from '../../effects/useResponsive';

export const Wrapper = styled(animated.div) <{ detailsEnabled?: number, loadingState?: LoadingState }>`
  background-image: ${p => p.loadingState === LoadingState.LOADED ? "linear-gradient(to right top, #2c2c2c, #252525, #1f1f1f, #181818, #111111)" : ""};
  background-color: ${p => !p.detailsEnabled ? "" : ""};
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2rem 0;
  padding-bottom: ${p => p.detailsEnabled ? "2rem" : ""};
  width: 95%; 
  position: relative;
`;

export const Header = styled.header`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 200;
  justify-content: flex-start;
  position: absolute;
  z-index: 10;
  top: -3rem;
  left: 1rem;
  padding: 0 .25rem;
  border-bottom-left-radius: .2rem;
  height: 2.5rem;
`;

export const MoviesWrapper = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
  margin-top: .25rem;
`;

export const Title = styled.div`
  /* padding-left: 5rem; */
  &::before {
    content: "";
    display: block;
    width: .5rem;
    height: .5rem;
    background: #cc0000;
    position: absolute;
    left: -1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const TitleText = styled.span`
  color: #fff;
  font-family: Poppins;
  font-size: 1.25rem;
  font-weight: 300;
`;

export const TitleIcon = styled.span``;

export const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export const ExpandControl = styled.div<{ resx?: responsiveProps }>`
  align-items: center;
  bottom: -1rem;
  display: flex;
  justify-content: center;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  position: absolute;
  right: 0;
  z-index: 1;
  height: 2rem;

  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    background: #000;
    top: 50%;
    transform: translateY(-50%);
    ${p => {
      const dim = p.resx?.isBigScreen ? 1 : .5;
      return `
        width: ${dim}rem;
        height: ${dim}rem;
        `;
    }};
    z-index: -1;
  }
`;

export const DetailsWrapper = styled.div`
  margin: 0 auto;
  position: relative;
  width: 100%;
`;;