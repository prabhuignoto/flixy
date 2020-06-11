import React, {KeyboardEvent} from 'react';
import ReactDOM from 'react-dom';
import {
  MediaModalWrapper,
  ModalHeader,
  ModalContent,
  ModalCloseIcon,
  ModalBackdrop,
} from './media-modal.styles';
import useResponsive from '../../effects/useResponsive';
import {CloseIcon} from '../icons';
import {useTransition, config} from 'react-spring';

const MediaModal: React.FunctionComponent<{
  title?: string;
  onClose?: () => void;
  open?: boolean;
}> = ({children, title, onClose, open}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const modalContainer = document.getElementById('modal_container');
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
    config: config.default,
  });

  React.useEffect(() => {
    if (open) {
      setTimeout(() => modalRef.current && modalRef.current.focus(), 250);
    }
  }, [open]);

  const handleKeyPress = (event: KeyboardEvent) => {
    if (event.keyCode === 27) {
      onClose && onClose();
    }
  };

  return modalContainer && open
    ? ReactDOM.createPortal(
        <>
          <ModalBackdrop></ModalBackdrop>
          {transitions.map(({item, key, props}) => {
            return item ? (
              <MediaModalWrapper
                ref={modalRef}
                tabIndex={0}
                resx={resx}
                key={key}
                style={props}
                onBlur={() => onClose && onClose()}
                onKeyUp={handleKeyPress}
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
