import emotion from "@emotion/styled";
import { responsiveProps } from "../../../effects/useResponsive";

const Root = emotion.div<{ resx?: responsiveProps }>`
  font-family: "Poppins";
`;

export const AttributeWrapper = emotion(Root)`
  align-items: center;
  background: #2a2a2a;
  border-radius: 3px;
  display: flex;
  height: ${p => p.resx && p.resx.isBigScreen ? "1.75rem" : "1.5rem"};
  justify-content: flex-start;
  min-width: 7rem;
`;

export const AttributeLabel = emotion(Root)`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: ${p => p.resx?.isBigScreen ? ".85rem" : ".75rem"};
  font-weight: 300;
  justify-content: flex-start;
  padding-left: .5rem;
  text-align: center;
  & span {
    margin-right: .4rem;
  }
`;

export const AttributeValue = emotion(Root)`
  align-items: center;
  background-color: rgba(204,0,0,0.8);
  border-bottom-right-radius: 3px;
  border-top-right-radius: 3px;
  color: #fff;
  display: flex;
  font-size: ${p => p.resx?.isBigScreen ? ".85rem" : ".75rem"};
  font-weight: 300;
  height: 100%;
  margin-left: auto;
  padding: 0 .5rem;
  white-space: nowrap;
`;

export const IconWrapper = emotion(Root)`
  display: flex;
  height: 29px;
  width: 20px;
  & svg {
    width: 100%;
  }
`