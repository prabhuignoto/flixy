import styled from "styled-components";

export const GenresWrapper = styled.ul`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  list-style: none;
  margin: 0;
  padding: .2rem;
`;

export const GenreItem = styled.li`
  align-items: center;
  background: rgba(204,0,0,0.95);
  border-radius: .2rem;
  /* box-shadow: 0 0.5px 0 0 #000, 0 1px 2px 0 #000; */
  color: #fff;
  display: flex;
  font-family: "Poppins";
  font-size: .85rem;
  font-weight: 400;
  justify-content: center;
  margin-right: .5rem;
  padding: .25rem .35rem;
`;