import React from "react";

import Tv, { TvCategory } from "./containers/tv";

export default () => (
  <>
    <Tv title="Top Rated" category={TvCategory.TOP_RATED} />
    <Tv title="Popular" category={TvCategory.POPULAR} />
    <Tv title="On Air" category={TvCategory.ON_AIR} />
  </>
);
