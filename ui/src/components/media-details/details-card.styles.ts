import styled from 'styled-components';
import {animated} from "react-spring";

export const DetailsCardWrapper = styled(animated.div)`
  align-items: flex-start;
  background: #191919;
  display: flex;
  height: 100%;
  justify-content: space-evenly;
  position: relative;
`;

export const DetailsWrapper = styled.section`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 90%;
  justify-content: flex-start;
  width: 80%;
`;

export const DetailsPosterWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  height: 75%;
  justify-content: center;
  flex-direction: column;
  width: 20%;
  margin: auto;
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
  font-size: 1rem;
  font-weight: 300;
  margin-bottom: 1rem;
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
  right: .5rem;
  top: .5rem;
  width: 3rem;
`;

export const GenresContainer = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: .25rem;
  /* margin-left: 1.5rem; */
  margin-top: .25rem;
`;