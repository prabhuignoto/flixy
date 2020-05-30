import React from 'react';
import { MediaMessageWrapper, MediaMessageText } from './media-message.style';

const MediaMessage: React.FunctionComponent<{message: string}> = ({message}) => (
  <MediaMessageWrapper>
    <MediaMessageText>
      {message}
    </MediaMessageText>
  </MediaMessageWrapper>
);

export default MediaMessage;