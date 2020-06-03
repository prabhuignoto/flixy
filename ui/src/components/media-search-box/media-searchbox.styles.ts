import styled from "styled-components";

export const SearchBoxWrapper = styled.div`
  align-items: center;
  background: #252525;
  border-radius: 2rem;
  display: flex;
  height: 100%;
  position: relative;
  width: 100%;
`;

export const SearchInput = styled.input`
  background: transparent;
  border: 0;
  color: #bdbdbd;
  font-family: Poppins;
  font-size: 1.2rem;
  font-weight: 400;
  height: 100%;
  outline: 0;
  padding-left: 1rem;
  width: calc(100% - 5rem);
`;

export const SearchIconWrapper = styled.div`
  background: none;
  border: 0;
  display: flex;
  height: 100%;
  margin-left: .5rem;
  width: 2.5rem;
  outline: none;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const GoButton = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  outline: 0;
  width: 2.5rem;
  padding: 0;
  margin-right: .2rem;

  & svg {
    width: 100%;
    height:100%;
  }
`
