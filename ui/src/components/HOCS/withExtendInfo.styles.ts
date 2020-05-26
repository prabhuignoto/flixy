import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";

const getButtonDimensions = (resx?: responsiveProps) => {
  if(resx && resx.isBigScreen) {
    return 26;
  } else {
    return 22;
  }
}

export const ViewBtnWrapper = styled.span<{resx?: responsiveProps}>`
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

export const Wrapper = styled.div`
  position: relative;
  margin: 0 .5rem;
`;