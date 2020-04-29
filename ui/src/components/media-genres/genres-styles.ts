import styled from "styled-components";

export const GenresWrapper = styled.ul`
  list-style: none;
  margin: 0;
  padding: .2rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const GenreItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: .2rem;
  margin-right: .5rem;
  font-family: "Poppins";
  font-size: .9rem;
  color: #fff;
  /* background: #C0C0C0; */
  background: rgba(204,0,0,0.95);
  font-weight: 400;
  padding: .2rem .45rem;
  box-shadow: 0 0 10px 1px rgba(0,0,0,0.6); 
`;