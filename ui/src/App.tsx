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
import { config } from "dotenv";
import smoothscroll from "smoothscroll-polyfill";
import Footer from "./components/header-footer/footer";

config();

smoothscroll.polyfill();

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

class App extends Component<{}, { fontsLoaded: boolean; hasError: boolean }> {
  constructor(props: any) {
    super(props);
    this.state = {
      fontsLoaded: false,
      hasError: false,
    };
  }

  componentDidMount() {
    fontLoader.load({
      google: {
        families: ["Poppins:200,300,400,500&display=swap"],
      },
    });
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <div className="App">
          <Router>
            <Switch>
              <Route path="/">
                <main
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%"
                  }}
                >
                  <TopRatedMovies />
                  <Trending />
                  <Upcoming />
                  {/* <TopRated />
                  <OnAir />
                  <Popular /> */}
                  <aside id="modal_container"></aside>
                </main>
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
