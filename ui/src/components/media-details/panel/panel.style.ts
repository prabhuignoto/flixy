import styled from "styled-components";
import { animated } from "react-spring";

export const PanelList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
  margin-top: .5rem;
  margin: 0 auto;
`;

export const PanelListItem = styled.li<{selected?: boolean}>`
  font-family: "Poppins";
  font-size: 1.2rem;
  font-weight: 400;
  color: #bdbdbd;
  width: 100%;
  text-align: left;
  margin: .5rem 0;
  cursor: pointer;
  white-space: nowrap;
  margin: 0 1rem;
  border-bottom: ${p => p.selected ? " 2px solid #cc0000" : ""};
`;

export const PanelClose = styled.div`
  width: 2rem;
  height: 2rem;
  margin-left: auto;
  cursor: pointer;
`;