import styled from "styled-components";
import React from "react";
import {ImdbIcon} from "../icons";

const ImdbButtonWrapper = styled.button`
  border: none;
  background: none;
  background-color: #000;
`;

const ImdbLink = styled.a`
  text-decoration: none;
  font-family: "Poppins";
  font-size: 1.25rem;
  display: block;
  width: 3rem;
  height: 3rem;
`;

const ImdbButton: React.FunctionComponent<{ id?: string }> = ({ id }) => (
  <ImdbButtonWrapper>
    <ImdbLink href={`https://www.imdb.com/title/${id}`} target="_blank">
      <ImdbIcon color="#fff"></ImdbIcon>
    </ImdbLink>
  </ImdbButtonWrapper>
);

export default ImdbButton;
