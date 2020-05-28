import React from "react";
import { FooterWrapper, Copyrights, Powered, Bold } from "./footer.styles";

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <Copyrights>
      &copy; {new Date().getFullYear()}, <Bold>movies.prabhumurthy.com</Bold>
    </Copyrights>
    <Powered>
      powered by <Bold>themoviedb.org</Bold>
    </Powered>
  </FooterWrapper>
);

export default Footer;