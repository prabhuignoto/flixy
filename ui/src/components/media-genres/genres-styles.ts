import styled from "styled-components";
import { GenreSize } from "./genres";

export const GenresWrapper = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: .2em;
`;

export const GenreItem = styled.li<{ size?: GenreSize }>`
  align-items: center;
  background: rgba(204,0,0,0.95);
  border-radius: .2em;
  color: #fff;
  display: flex;
  font-family: "Poppins";
  justify-content: center;
  margin-right: .5em;
  ${p => {
    if (p.size === GenreSize.large) {
      return `
      padding: .25em .35em;
      font-size: .85em;
      font-weight: 400;
      `;
    } else {
      return `
      padding: .25em .35em;
      font-size: .75em;
      font-weight: 300;`  
    }
  }}
  
`;