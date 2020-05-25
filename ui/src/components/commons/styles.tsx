import styled from "styled-components";

export const Button = styled.button<{ size?: string }>`
  background: none;
  border: 0;
  outline: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  & svg {
    width: 100%;
    height: 100%;
  }
  ${({size}) => {
    let style;
    switch (size) {
      case "small":
        style = "min-width: 2rem; height: 2rem;";
        break;
      case "medium":
        style = "width: 3rem; height: 1.5rem;";
        break;
      case "large":
        style = "min-width: 4rem; height: 3rem;";
        break;
    }
    return style;
  }}
`;
