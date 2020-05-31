import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  width: 100%;
  font-family: "Poppins";
  font-size: 1rem;
  min-height: 3rem;
  display: flex;
  align-items: center;
  color: #fff;
  font-weight: 200;
`;

export const Copyrights = styled.div`
`;

export const Powered = styled.div`
  margin-left: 2rem;
`;

export const Bold = styled.span`
  font-weight: 500;
`;

export const Github = styled.div`
  font-weight: 300;
  margin: 0 1rem;
  display: flex;
  color: #fff;

  & svg {
    width: 1.5rem;
  }
`