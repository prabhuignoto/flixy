import React from "react";

import Tv, { TvCategory } from "../containers/tv";

export default () => {
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => setShow(true), 750);
  }, []);

  return show ? (
    <>
      <Tv title="Top Rated" category={TvCategory.TOP_RATED} />
      <Tv title="Popular" category={TvCategory.POPULAR} />
      <Tv title="On Air" category={TvCategory.ON_AIR} />
    </>
  ) : null;
};
