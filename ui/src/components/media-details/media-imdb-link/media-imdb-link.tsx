import React from "react";
import { ImdbLinkWrapper, ImdbLink } from "./media-imdb-link.styles";
import { ImdbIcon } from "../../icons";

const MediaImdbLink: React.FunctionComponent<{ id: string }> = ({ id }) => (
  <ImdbLinkWrapper>
    <ImdbLink href={`https://imdb.com/title/${id}`} target="_new">
      <ImdbIcon color="#191919"/>
      <span>view on IMDB</span>
    </ImdbLink>
  </ImdbLinkWrapper>
);

export default MediaImdbLink;
