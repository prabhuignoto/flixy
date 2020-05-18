import { hot } from "react-hot-loader/root";
import React, { Component } from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import TopRatedMovies from "./containers/movies/topRated";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import OnAir from "./containers/tv/onAir";
import Popular from "./containers/tv/popular";
import TopRated from "./containers/tv/topRated";
import Trending from "./containers/movies/popular";
import Upcoming from "./containers/movies/upComing";
import fontLoader from "webfontloader";

const client = new ApolloClient({
  // uri: "http://localhost:3000/graphql",
  uri: "https://movieapi.prabhumurthy.com/graphql",
  cache: new InMemoryCache(),
});

class App extends Component<{}, {fontsLoaded: boolean, hasError: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontsLoaded: false,
      hasError: false
    };
  }

  componentDidMount() {
    fontLoader.load({
      google: {
        families: ["Poppins"],
      },
      fontactive: () => this.setState({ fontsLoaded: true }),
    });
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    return this.state.fontsLoaded && (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/">
                <TopRatedMovies />
                <Trending />
                <Upcoming />
                <TopRated />
                <OnAir />
                <Popular />
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default hot(App);
