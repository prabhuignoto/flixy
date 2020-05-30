import React from "react";
import { FooterWrapper, Copyrights, Powered, Bold } from "./footer.styles";

const Footer: React.FunctionComponent = () => (
  <FooterWrapper>
    <Copyrights>
      &copy; {new Date().getFullYear()}, prabhumurthy.com
    </Copyrights>
    <Powered>
      powered by themoviedb.org
    </Powered>
  </FooterWrapper>
);

export default Footer;