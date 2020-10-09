import emotion from "@emotion/styled";
import { animated } from "react-spring";
import { responsiveProps } from "../../effects/useResponsive";

export const MediaModalWrapper = emotion(animated.div) <{ resx?: responsiveProps }>`
  background: #e5e5e5;
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
        max-width: 1700px;
        min-width: 1600px;
      `;
    } else if (p.resx?.isDesktopOrLaptop) {
      return `
        max-width: 1200px;
        min-width: 1000px;
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
      return `min-height: 700px`
    }
  }};
`;

export const ModalHeader = emotion.header`
  align-items: center;
  display: flex;
  height: 3.5rem;
  justify-content: flex-start;
  width: 100%;
  background: #dbdbdb;

  & .title {
    color: #000;
    font-family: Poppins;
    font-size: 1.1rem;
    font-weight: 400;
    padding-left: 1rem;
    text-transform: uppercase;
  }
`;

export const ModalContent = emotion.section`
  align-items: center;
  display: flex;
  height: calc(100% - 5rem);
  justify-content: center;
`;

export const ModalCloseIcon = emotion.span`
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

export const ModalBackdrop = emotion.div`
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