import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";

export const GenresWrapper = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: .2em .2em .2em 0;
`;

export const GenreItem = styled.li<{ resx?: responsiveProps }>`
  align-items: center;
  background: rgba(204,0,0,0.95);
  border-radius: .2em;
  color: #fff;
  display: flex;
  font-family: "Poppins";
  justify-content: center;
  margin-right: .5em;
  ${p => {
    if (p.resx?.isBigScreen) {
      return `
        padding: .25em .35em;
        font-size: .85em;
        font-weight: 300;
      `;
    } else {
      return `
        padding: .25em .5em;
        font-size: .75em;
        font-weight: 300;`
    }
  }}
  
`;