import styled from "styled-components";

export const PanelList = styled.ul`
  display: flex;
  list-style: none;
  margin-top: .5rem;
  margin: 0 auto;
  margin: 0;
  padding: 0;
`;

export const PanelListItem = styled.li<{selected?: boolean}>`
  border-bottom: ${p => p.selected ? " 2px solid #cc0000" : ""};
  color: #000;
  cursor: pointer;
  font-family: "Poppins";
  font-size: 1.25rem;
  font-weight: 400;
  margin: .5rem 0;
  margin: 0 1rem;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const PanelClose = styled.div`
  cursor: pointer;
  height: 2rem;
  margin-left: auto;
  width: 2rem;
`;