import styled from "styled-components";


export const LogoWrapper = styled.div`
  padding: .1rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const LogoText = styled.div`
  font-family: Poppins;
  font-size: 1.75rem;
  font-weight: 400; 
  color: #d0d0d0;
  text-transform: capitalize;
  border-radius: .25rem;
  position: relative;
`;

export const LogoIcon = styled.span`
  margin-right: .5rem;
  width: 2rem;
  height: 100%;
  display: flex;
  align-items: center;

  & svg {
    width: 100%;
    height: 100%;
    fill: #464646;
  }
`;