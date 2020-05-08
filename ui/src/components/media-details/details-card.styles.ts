import styled from 'styled-components';
import {animated} from "react-spring";

export const DetailsCardWrapper = styled(animated.div)`
  align-items: center;
  background: #000;
  display: flex;
  height: 100%;
  justify-content: space-around;
  position: relative;
  /* padding: 1rem .5rem; */
  margin-top: .5rem;
  flex-wrap: wrap;
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
`;

export const DetailsWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
  background: #191919;
  border-radius: .2rem;
  &>* {
    padding-left: 1.5rem;
  }
  @media (min-width: 1366px) {
    width: 58%;
  }
`;

export const DetailsPosterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  justify-content: center;
  flex-direction: column;
  width: 10%;
  margin: auto;
  height: 350px;
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
  /* padding-left: 1.5rem; */
  text-align: left;
`;

export const Overview = styled(Title)`
  color: #fff;
  font-size: .95rem;
  font-weight: 300;
  margin-bottom: .5rem;
  width: 95%;
`;

export const Budget = styled.div``;


export const CloseDetails = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 3rem;
  outline: none;
  position: absolute;
  right: 1rem;
  top: .25rem;
  width: 3rem;
  z-index:10;
  border-radius: 50%;
`;

export const ReviewsWrapper = styled.div`
  @media (min-width: 1366px) {
    width: 40%;
  }
  width: 100%;
  height: 100%;
  background: #191919;
  border-radius: .2rem;
`;

export const Box2 = styled.div`
  display: flex;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

export const CastAndCrewWrapper = styled.div`
  width: 95%;
`;