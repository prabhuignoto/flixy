import styled from "styled-components";

export const MoviesControl = styled.ul`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style: none;
`;

export const MoviesControlItem = styled.li`
  color: white;
`;

export const ScrollButton = styled.button`
  background: rgba(0,0,0, .9);
  border: none;
  cursor: pointer;
  height: 3.5rem;
  outline: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3.5rem;
  z-index: 1;
  border-radius: 50%;
`;

export const ScrollLeft = styled(ScrollButton)`
  left: 0;
`;

export const ScrollRight = styled(ScrollButton)`
  right: 0;
`;

export const MoviesWrapper = styled.div`
  height: 100%;
  position: relative;
  width: 100%;
`;

export const DetailsCardContainer = styled.div``;