import styled from 'styled-components';
import {animated} from "react-spring";

export const DetailsCardWrapper = styled(animated.div)`
  align-items: center;
  background: #000;
  display: flex;
  height: 100%;
  justify-content: space-around;
  position: relative;
  padding: 1rem .5rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
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
  margin-top: 1rem;
  /* padding-left: 1.5rem; */
  text-align: left;
`;

export const Overview = styled(Title)`
  color: #fff;
  font-size: .95rem;
  font-weight: 300;
  margin-bottom: 1rem;
  width: 95%;
`;

export const Budget = styled.div``;

export const AttributesContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-evenly;
  margin-left: auto;
  margin-right: 1rem;
  padding-left: 1.5rem;
`;

export const AttributeContainer = styled.div`
  margin-right: .75rem;
`;

export const CloseDetails = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  height: 3rem;
  outline: none;
  position: absolute;
  right: 0;
  top: -2rem;
  width: 3rem;
`;

export const GenresContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: .25rem;
  flex-wrap: wrap;
  margin-top: .25rem;
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
  justify-content: center;
  padding-left: 0;
  margin-top: 1rem;
`;

export const CastAndCrewWrapper = styled.div`
  width: 95%;
`;