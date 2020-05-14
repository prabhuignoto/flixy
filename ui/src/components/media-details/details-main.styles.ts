import styled from 'styled-components';
import { animated } from "react-spring";
import { responsiveProps } from '../../effects/useResponsive';

export const DetailsHome = styled.div`
  width: 100%;
  /* padding-left: 1rem; */
`;

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
  background: #191919;
  border-radius: .2rem;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
  /* &:not()>* {
    padding-left: 1.2rem;
  } */
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
  color: #fff;
  font-size: 1.5rem;
  font-weight: 400;
  margin-top: 1rem;
  text-align: left;
`;

export const Overview = styled(Title) <{ resxProps?: responsiveProps }>`
  color: #fff;
  font-size: ${p =>p.resxProps?.isBigScreen ? ".9rem" : ".8rem"};
  font-weight: 300;
  margin: .25rem 0;
  width: 95%;
  padding-left: 1rem;
`;

export const Budget = styled.div``;


export const CloseDetails = styled.button<{ resxProps?: responsiveProps }>`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: ${p => p.resxProps?.isBigScreen ? "3.5rem" : "3rem"};
  width: ${p => p.resxProps?.isBigScreen ? "3.5rem" : "3rem"};
  outline: none;
  position: absolute;
  right: .5rem;
  top: .25rem;
  z-index:10;
`;

export const ReviewsWrapper = styled.div<{ resxProps?: responsiveProps }>`
  border-radius: .2rem;
  height: ${p => p.resxProps?.isBigScreen ? "450px" : "100%"};
  position: relative;
  width: 100%;
`;

export const PostersWrapper = styled.div<{ resxProps?: responsiveProps }>`
  height: ${p => p.resxProps?.isBigScreen ? "450px" : "100%"};
  position: relative;
  width: ${p => p.resxProps?.isBigScreen ? "55%" : "100%"};
`;

export const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: .25rem;
`;

export const Box2 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: .5rem;
  width: 100%;
`;

export const CastAndCrewWrapper = styled.div<{ resxProps?: responsiveProps }>`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  margin-top: 1.5rem;
  flex-direction: ${p => p.resxProps?.isBigScreen ? "row" : "column"}
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
  height: 100%;
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


export const CastAndCrewContainer = styled.div<{ resxProps?: responsiveProps }>`
  min-height: 350px;
  height: 1px;
  width: ${ ({ resxProps }) => {
    const { isTabletOrMobile, isBigScreen, isDesktopOrLaptop } = <responsiveProps>resxProps;
    if (isTabletOrMobile) {
      return "100%";
    } else if (isDesktopOrLaptop && !isBigScreen) {
      return "100%";
    } else {
      return "45%";
    }
  }
  };
`;

export const PanelContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  height: 3rem;
  background: #131313;
  z-index: 10;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;