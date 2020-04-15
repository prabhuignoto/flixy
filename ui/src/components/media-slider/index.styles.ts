import styled from 'styled-components';
import { animated } from "react-spring";

export const Wrapper = styled(animated.div)<{expand?: number}>`
  background-color: #000;
  border-radius: .25rem;
  display: flex;
  flex-direction: column;
  margin: .5rem 0;
  padding: 1rem;
  width: 100%; 
`;

export const Header = styled.header`
  font-family: "Poppins";
  font-size: 1.3rem;
  color: #fff;
  width: 100%;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
`;

export const MoviesWrapper = styled(animated.div) <{ expand?: number }>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.div``;

export const TitleText = styled.span``;

export const TitleIcon = styled.span``;

export const ButtonWrapper = styled.div`
  margin-left: auto;
`;

export const Footer = styled.footer`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;