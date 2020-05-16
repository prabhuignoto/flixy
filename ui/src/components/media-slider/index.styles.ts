import styled from 'styled-components';
import { animated } from "react-spring";

export const Wrapper = styled(animated.div) <{ detailsEnabled?: number }>`
  background-color: ${p => !p.detailsEnabled ? "#111" : ""};
  ${p => p.detailsEnabled && "background-image: linear-gradient(to top, #363636, #2c2c2c, #232323, #1a1a1a, #111111);"};
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  width: 100%; 
  overflow: hidden;
  margin: 1rem 0;
  padding-bottom: ${p => p.detailsEnabled ? "2rem" : ""};;
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
  padding-top: 1rem;
  text-align: left;
  width: 100%;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
`;

export const MoviesWrapper = styled(animated.div) <{ expand?: number }>`
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
`;