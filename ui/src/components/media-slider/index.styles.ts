import styled from 'styled-components';
import { animated } from "react-spring";

export const Wrapper = styled(animated.div) <{ detailsEnabled?: number }>`
  ${p => p.detailsEnabled && "background-image: linear-gradient(to right top, #2c2c2c, #252525, #1f1f1f, #181818, #111111);"};
  background-color: ${p => !p.detailsEnabled ? "#111" : ""};
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  margin: 2.5rem 0 2rem 0;
  padding-bottom: ${p => p.detailsEnabled ? "2rem" : ""};
  width: 95%; 
  position: relative;
  /* box-shadow: 0 8px 6px -6px #cc0000; */
`;

export const Header = styled.header`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: "Poppins";
  font-size: 1.1rem;
  font-weight: 300;
  justify-content: flex-start;
  position: absolute;
  /* background: linear-gradient(90deg, rgba(17,17,17,.85) 0%, rgba(25,25,25,.5) 50%, rgba(0,0,0,0) 100%); */
  z-index: 10;
  top: -2.5rem;
  left: 0;
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
  margin-top: 1rem;
`;

export const Title = styled.div`
  /* padding-left: 5rem; */
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

export const Footer = styled.footer`
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: .5rem;
  z-index: 1;
  position: absolute;
  bottom: -2.5rem;
`;

export const DetailsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;;