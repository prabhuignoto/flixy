import styled from "styled-components";
import { responsiveProps } from "../../effects/useResponsive";
import { animated } from "react-spring";

export const MediaModalWrapper = styled(animated.div) <{ resx?: responsiveProps }>`
  background: #fff;
  border-radius: .25rem;
  box-shadow: 0 0 8px 4px rgba(0,0,0,0.3);
  height: 1px;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  outline: 0;
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99999;
  ${p => {
    if (p.resx?.isBigScreen) {
      return `
        max-width: 1400px;
        min-width: 1200px;
      `;
    } else if (p.resx?.isDesktopOrLaptop) {
      return `
        max-width: 1200px;
        min-width: 900px;
      `;
    } else {
      return `
        max-width: 900;
        min-width: 800px;
      `;
    }
  }};
  ${p => {
    if (p.resx?.isBigScreen) {
      return `min-height: 900px`;
    } else {
      return `min-height: 750px`
    }
  }};
`;

export const ModalHeader = styled.header`
  align-items: center;
  display: flex;
  height: 3.5rem;
  justify-content: flex-start;
  width: 100%;

  & .title {
    color: #cc0000;
    font-family: Poppins;
    font-size: 1rem;
    font-weight: 400;
    padding-left: 1rem;
  }
`;

export const ModalContent = styled.section`
  align-items: center;
  display: flex;
  height: calc(100% - 5rem);
  justify-content: center;
`;

export const ModalCloseIcon = styled.span`
  cursor: pointer;
  display: flex;
  height: 2.5rem;
  margin-left: auto;
  margin-right: .25rem;
  width: 2.5rem;

  & svg {
    height: 100%;
    width: 100%;
  }
`;

export const ModalBackdrop = styled.div`
  background: rgba(0,0,0,0.75);
  height: 100%;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  position: fixed;
  right: 0;
  top:0;
  width: 100%;
  z-index: 9999;
`;