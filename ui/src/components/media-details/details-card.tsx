import * as React from "react";
import {
  DetailsCardWrapper,
  DetailsWrapper,
  DetailsPosterWrapper,
  Title,
  CloseDetails,
} from "./details-card.styles";
import Movie from "../../models/Movie";
import Poster from "../media-poster/poster";
import { CardSize } from "../../models/CardSize";
import { CloseIcon } from "./../icons/index";

type CardDetail = Movie & { handleClose: () => void };

export default React.memo(({ poster_path, title, handleClose }: CardDetail) => {
  return (
    <DetailsCardWrapper>
      <DetailsPosterWrapper>
        <Poster poster_path={poster_path} size={CardSize.large} />
      </DetailsPosterWrapper>
      <DetailsWrapper>
        <Title>{title}</Title>
      </DetailsWrapper>
      <CloseDetails onClick={handleClose}>
        <CloseIcon />
      </CloseDetails>
    </DetailsCardWrapper>
  );
});
