import styled from 'styled-components';
import { animated } from "react-spring";

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
  margin-top: .5rem;
  text-align: left;
`;

export const Overview = styled(Title)`
  color: #fff;
  font-size: .95rem;
  font-weight: 300;
  margin: .25rem 0;
  width: 95%;
`;

export const Budget = styled.div``;


export const CloseDetails = styled.button`
  background: none;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  height: 3rem;
  outline: none;
  position: absolute;
  right: 1rem;
  top: .25rem;
  width: 3rem;
  z-index:10;
`;

export const ReviewsWrapper = styled.div`
  border-radius: .2rem;
  min-height: 500px;
  height: 1px;
  width: 47%;
  margin-right: 2.5rem;
  position: relative;
  /* box-shadow: 0 0 7px 4px rgba(0,0,0,0.4); */
`;

export const Box1 = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  margin-bottom: .5rem;
`;

export const Box2 = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin-top: 1rem;
  width: 100%;
`;

export const CastAndCrewWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  /* height: 450px; */
  justify-content: space-between;
  margin-top: 1rem;
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

export const DetailsHome = styled.div`
  width: 100%;
  padding-left: 1.5rem;
`;

export const CastAndCrewContainer = styled.div`
  width: 50%;
  min-height: 500px;
  height: 1px;
`;

export const PanelContainer = styled(animated.div)`
  position: absolute;
  width: 100%;
  left: 0;
  height: 4rem;
  background: #131313;
  z-index: 10;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;