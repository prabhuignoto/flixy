import React from "react";
import {
  MediaMessageWrapper,
  MediaMessageText,
  MediaMessageIcon,
} from "./media-message.style";
import useResponsive from "../../effects/useResponsive";

const MediaMessage: React.FunctionComponent<{
  message: string;
  icon?: React.ReactNode;
}> = ({ message, icon }) => {
  const resx = useResponsive();
  return (
    <MediaMessageWrapper>
      {icon && <MediaMessageIcon resx={resx}>{icon}</MediaMessageIcon>}
      <MediaMessageText resx={resx}>{message}</MediaMessageText>
    </MediaMessageWrapper>
  );
};

export default MediaMessage;
