import styled from 'styled-components';

export const DetailsCardWrapper = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 600px;
  background: #191919;
  position: relative;
`;

export const DetailsWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const DetailsPosterWrapper = styled.div`
  height: 100%;
`;

export const Backdrop = styled.div``;

export const BackdropImage = styled.img``;

export const Title = styled.div``;

export const Budget = styled.div``;

export const RunTime = styled.div``;

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