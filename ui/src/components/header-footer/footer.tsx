import React from "react";
import {
  FooterWrapper,
  Copyrights,
  Powered,
  Github,
} from "./footer.styles";
import { GithubIcon } from "../icons";

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <Copyrights>&copy; {new Date().getFullYear()}, prabhumurthy.com</Copyrights>
    <Github>
      <GithubIcon color="#fff"/> <span>Github</span>
    </Github>
    <Powered>powered by themoviedb.org</Powered>
  </FooterWrapper>
);

export default Footer;
