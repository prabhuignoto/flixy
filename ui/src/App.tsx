import { hot } from "react-hot-loader/root";
import React from "react";
import "./App.css";
// import ApolloClient from "apollo-boost";
import {ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
// import { ApolloProvider } from "@apollo/react-hooks";
import TopRatedMovies from "./containers/movies/topRated";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OnAir from "./containers/tv/onAir";
// import Popular from "./containers/tv/popular";
// import TopRated from "./containers/tv/topRated";
import Trending from "./containers/movies/popular";
import Upcoming from "./containers/movies/upComing";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/movies">
              <TopRatedMovies />
              {/* <Trending /> */}
            </Route>
          </Switch>
          {/* <Route path="/tv"> */}
          {/* <TopRated /> */}
          {/* <Popular />*/}
          {/* <OnAir />
          </Route> */}
        </Router>
      </div>
    </ApolloProvider>
  );
}

export default hot(App);
