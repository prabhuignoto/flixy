import React from "react";

import OnAir from "./containers/tv/onAir";
import Popular from "./containers/tv/popular";
import TopRated from "./containers/tv/topRated";

export default () => (
  <>
    <TopRated />
    <OnAir />
    <Popular />
  </>
);
