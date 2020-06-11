import React from "react";

import Movies from "../containers/movies";
import { Category } from "../containers/models";

export default () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShow(true), 750);
  }, []);

  return show ? <>
    <Movies category={Category.POPULAR} title="Popular" />
    <Movies category={Category.TOP_RATED} title="Top Rated" />
    <Movies category={Category.NOW_PLAYING} title="Now Playing" />
    <Movies category={Category.UP_COMING} title="Up Coming" />
  </> : null
};
