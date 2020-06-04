import styled from 'styled-components';
import { animated } from "react-spring";
import { responsiveProps } from '../../effects/useResponsive';



export const DetailsCardWrapper = styled(animated.div)`
  align-items: center;
  background: #000;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-around;
  left: 0;
  position: absolute;
  position: relative;
  top: 0;
  width: 100%;
  margin: 0 auto;
`;

export const DetailsWrapper = styled.section`
  align-items: flex-start;
  background: #e5e5e5;
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
  /* box-shadow: inset 0  0 40px 15px rgba(0,0,0,0.1); */
  @media (min-width: 1366px) {
    width: 100%;
  }
  position: relative;
`;

export const DetailsPosterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 350px;
  justify-content: center;
  margin: auto;
  width: 10%;
`;

export const Backdrop = styled.div``;

export const BackdropImage = styled.img``;

const Font = styled.div`
  font-family: "Poppins";
`

export const Title = styled(Font)`
  color: #191919;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1.2rem;
  text-align: left;
`;
export const Budget = styled.div``;


export const CloseDetails = styled.button<{ resxProps?: responsiveProps }>`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: ${p => p.resxProps?.isBigScreen ? "3.5rem" : "2.5rem"};
  width: ${p => p.resxProps?.isBigScreen ? "3.5rem" : "2.5rem"};
  outline: none;
  position: absolute;
  right: 0rem;
  top: 0rem;
  z-index:10;
`;

export const ReviewsWrapper = styled.div<{ resxProps?: responsiveProps }>`
  border-radius: .2rem;
  height: 100%;
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
`;

export const MenuButtonWrapper = styled.div`
  width: 2rem;
  height: 2rem;
  margin: 1rem 1rem 0;
  color: rgba(204,0,0,0.85);
  cursor: pointer;
`;

export const RecommendedMoviesWrapper = styled.div`
  width: 100%;
  height: 95%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const RecommendedMoviesContainer = styled.div`
  width: 95%;
  margin: 0 auto;
  position: relative;
`;

export const SimilarMoviesWrapper = styled.div``;

export const PanelContainer = styled(animated.div)`
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: auto;
  background: #dbdbdb;
`;