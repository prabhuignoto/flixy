import React from 'react';
import {ImdbLinkWrapper, ImdbLink} from './media-imdb-link.styles';
import {ExternalIcon} from '../../icons';

const MediaImdbLink: React.FunctionComponent<{id: string}> = ({id}) => (
  <ImdbLinkWrapper>
    <ImdbLink href={`https://imdb.com/title/${id}`} target="_new">
      {/* <ExternalIcon color="#fff"/> */}
      <span>IMDB</span>
    </ImdbLink>
  </ImdbLinkWrapper>
);

export default MediaImdbLink;
