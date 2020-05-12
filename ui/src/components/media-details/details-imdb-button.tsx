import styled from "styled-components";
import React from "react";
import {ImdbIcon} from "../icons";

const ImdbButtonWrapper = styled.button`
  background-color: #000;
  background: none;
  border: none;
`;

const ImdbLink = styled.a`
  display: block;
  font-family: "Poppins";
  font-size: 1.25rem;
  height: 3rem;
  text-decoration: none;
  width: 3rem;
`;

const ImdbButton: React.FunctionComponent<{ id?: string }> = ({ id }) => (
  <ImdbButtonWrapper>
    <ImdbLink href={`https://www.imdb.com/title/${id}`} target="_blank">
      <ImdbIcon color="#fff"></ImdbIcon>
    </ImdbLink>
  </ImdbButtonWrapper>
);

export default ImdbButton;
