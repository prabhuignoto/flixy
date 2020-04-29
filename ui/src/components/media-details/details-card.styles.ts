import styled from 'styled-components';

export const DetailsCardWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-evenly;
  height: 100%;
  background: #191919;
  position: relative;
`;

export const DetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: 90%;
  flex: auto;
  justify-content: flex-start;
  width: 100%;
`;

export const DetailsPosterWrapper = styled.div`
  height: 90%;
  margin-left: 1rem;
  width: auto;
  flex-basis: 350px;
`;

export const Backdrop = styled.div``;

export const BackdropImage = styled.img``;

const Font = styled.div`
  font-family: "Poppins";
`

export const Title = styled(Font)`
  font-weight: 400;
  font-size: 1.5rem;
  color: #fff;
  text-align: left;
  padding-left: 1.5rem;
  margin-top: 1rem;
`;

export const Overview = styled(Title)`
  font-size: 1rem;
  font-weight: 300;
  color: #fff;
  margin-bottom: 1rem;
`;

export const Budget = styled.div``;



export const Attributes = styled.div`
  display: flex;
  align-items: center;
  padding-left: 1.5rem;
`

export const CloseDetails = styled.button`
  border: none;
  background: none;
  outline: none;
  position: absolute;
  right: .5rem;
  top: .5rem;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
`;