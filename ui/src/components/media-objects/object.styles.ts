import styled from "styled-components";

export const ObjectsWrapper = styled.ul<{columns: number}>`
  list-style: none;
  display: grid;
  grid-auto-flow: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  width: 90%;
  overflow-x: hidden;
  scroll-behavior: smooth;
  margin-top: 2rem;
  padding-left: 1.5rem;
`;

export const Object = styled.li`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ObjectImage = styled.img`
  height: 11rem;
  object-fit: contain;
  border-radius: .25rem;
`;

export const ObjectName = styled.span`
  font-family: "Poppins";
  font-size: .75rem;
  font-weight: 500;
  color: #fff;
  white-space: nowrap;
  margin-top: .5rem;
`