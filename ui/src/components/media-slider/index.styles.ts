import styled from 'styled-components';
import { animated } from "react-spring";

export const Wrapper = styled(animated.div) <{ detailsEnabled?: number }>`
  ${p => p.detailsEnabled && "background-image: linear-gradient(to right top, #2c2c2c, #252525, #1f1f1f, #181818, #111111);"};
  background-color: ${p => !p.detailsEnabled ? "#111" : ""};
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  overflow: hidden;
  padding-bottom: ${p => p.detailsEnabled ? "2rem" : ""};
  width: 100%; 
`;

export const Header = styled.header`
  align-items: center;
  color: #fff;
  cursor: pointer;
  display: flex;
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 400;
  justify-content: flex-start;
  margin-bottom: .5rem;
  padding-left: 1.5rem;
  padding-top: .5rem;
  text-align: left;
  width: 100%;
`;

export const MoviesWrapper = styled(animated.div)`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const Title = styled.div`
  padding-left: 5rem;
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
`;

export const DetailsWrapper = styled.div`
  margin: 0 auto;
  width: 100%;
  position: relative;
`;