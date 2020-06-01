import React, { Component } from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import fontLoader from "webfontloader";
import { config } from "dotenv";
import smoothscroll from "smoothscroll-polyfill";
import Header from "./components/header/header";

const Movies = React.lazy(() => import("./Movies"));
const Tv = React.lazy(() => import("./Tv"));

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
            <Header></Header>
            <Switch>
              <Route path="/movies">
                <main
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <React.Suspense fallback={<></>}>
                    <Movies />
                  </React.Suspense>
                  <aside id="modal_container"></aside>
                </main>
              </Route>
              <Route path="/tv">
                <React.Suspense fallback={<></>}>
                  <Tv />
                </React.Suspense>
              </Route>
            </Switch>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
