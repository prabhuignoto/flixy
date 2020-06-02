import React, { Component } from "react";
import "./App.css";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";

import fontLoader from "webfontloader";
import { config } from "dotenv";
import smoothscroll from "smoothscroll-polyfill";
import Header from "./components/header/header";
import SearchHome from "./pages/SearchHome";

const Movies = React.lazy(() => import("./pages/Movies"));
const Tv = React.lazy(() => import("./pages/Tv"));

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
              <Switch>
                <Redirect from="/" exact to="/movies" />
                <Route path="/movies">
                  <React.Suspense fallback={<></>}>
                    <Movies />
                  </React.Suspense>
                </Route>
                <Route path="/tv">
                  <React.Suspense fallback={<></>}>
                    <Tv />
                  </React.Suspense>
                </Route>
                <Route path="/search">
                  <React.Suspense fallback={<></>}>
                    <SearchHome />
                  </React.Suspense>
                </Route>
              </Switch>
              <aside id="modal_container"></aside>
            </main>
          </Router>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
