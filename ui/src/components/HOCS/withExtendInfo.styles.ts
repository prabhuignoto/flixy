import { responsiveProps } from "../../effects/useResponsive";
import emotion from "@emotion/styled";

export const ViewBtnWrapper = emotion.span<{ resx?: responsiveProps }>`
  background: rgba(0,0,0,0.85);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  font-weight: 500;
  height: 24px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  padding: 3px;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  & svg {
    height: 100%;
    width: 100%;
  }
  padding: .5rem;
`;

export const Wrapper = emotion.div`
  position: relative;
  margin: 0 .5rem;
`;