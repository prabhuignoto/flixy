import React from "react";
import ReactDOM from "react-dom";
import {
  MediaModalWrapper,
  ModalHeader,
  ModalContent,
  ModalCloseIcon,
  ModalBackdrop,
} from "./media-modal.styles";
import useResponsive from "../../effects/useResponsive";
import { CloseIcon } from "../icons";
import { useTransition } from "react-spring";

const MediaModal: React.FunctionComponent<{
  title?: string;
  onClose?: () => void;
  open?: boolean;
}> = ({ children, title, onClose, open }) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalContainer = document.getElementById("modal_container");
  const resx = useResponsive();

  const transitions = useTransition(open, null, {
    enter: {
      opacity: 1,
    },
    leave: {
      opacity: 0,
    },
    from: {
      opacity: 0,
    },
  });

  return modalContainer && open
    ? ReactDOM.createPortal(
        <>
          <ModalBackdrop></ModalBackdrop>
          {transitions.map(({ item, key, props }) => {
            return item ? (
              <MediaModalWrapper
                ref={modalRef}
                tabIndex={0}
                resx={resx}
                key={key}
                style={props}
              >
                <ModalHeader>
                  <span className="title">{title}</span>
                  <ModalCloseIcon onClick={() => onClose && onClose()}>
                    <CloseIcon />
                  </ModalCloseIcon>
                </ModalHeader>
                <ModalContent>{children}</ModalContent>
              </MediaModalWrapper>
            ) : null;
          })}
        </>,
        modalContainer
      )
    : null;
};

export default MediaModal;
