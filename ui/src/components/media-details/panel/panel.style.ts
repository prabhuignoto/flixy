import emotion from "@emotion/styled";
import { responsiveProps } from "../../../effects/useResponsive";

export const PanelList = emotion.ul<{ resx?: responsiveProps }>`
  display: flex;
  list-style: none;
  margin-top: .5em;
  margin: 0 auto;
  margin: 0;
  padding: 0;
  font-family: "Poppins";
  font-size: ${p => p.resx && p.resx.isBigScreen ? "1.25rem" : ""};
  font-weight: 500;
`;

export const PanelListItem = emotion.li<{ selected?: boolean }>`
  border-bottom: ${p => p.selected ? " 2px solid #cc0000" : ""};
  color: #000;
  cursor: pointer;
  margin: .5rem 0;
  margin: 0 1rem;
  text-align: left;
  user-select: none;
  white-space: nowrap;
  width: 100%;
`;

export const PanelClose = emotion.div`
  cursor: pointer;
  height: 2em;
  margin-left: auto;
  width: 2em;
`;