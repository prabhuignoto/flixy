import styled from "styled-components";

export const ImdbLinkWrapper = styled.div`
  border-radius: .2rem;
  height: 2rem;
  background: #ccb200;
`;

export const ImdbLink = styled.a`
  text-decoration: none;
  font-family: Poppins;
  font-size: .8rem;
  font-weight: 500;
  color: #000;
  padding:0;
  min-width: 2.5rem;
  height: 100%;
  display: block;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    width: 1.5rem;
    height: 100%;
    margin-left: .25rem;
  }

  & span {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: .2rem;
    padding-right: .35rem;
  }
`;