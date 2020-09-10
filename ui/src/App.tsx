import {ApolloClient, ApolloProvider, InMemoryCache} from '@apollo/client';
import {config} from 'dotenv';
import React, {Component} from 'react';
import ReactGA from 'react-ga';
import MediaQuery from 'react-responsive';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import fontLoader from 'webfontloader';
import './App.css';
import Header from './components/header/header';
import MediaMessage from './components/media-message/media-message';
import SearchHome from './pages/SearchHome';

const Movies = React.lazy(() => import('./pages/Movies'));
const Tv = React.lazy(() => import('./pages/Tv'));

config();

const client = new ApolloClient({
  uri: process.env.REACT_APP_API_URL,
  cache: new InMemoryCache(),
});

class App extends Component<{}, {fontsLoaded: boolean; hasError: boolean}> {
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
        families: ['Poppins:200,300,400,500&display=swap'],
      },
    });
    ReactGA.initialize(process.env.TRACKING_ID as string);
  }

  static getDerivedStateFromError(error: any) {
    return {hasError: true};
  }

  render() {
    return (
      <>
        <MediaQuery minDeviceWidth={1024}>
          <ApolloProvider client={client}>
            <div className="App">
              <Router>
                <Header></Header>
                <main
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '100%',
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
        </MediaQuery>
        <MediaQuery maxDeviceWidth={1023}>
          <div
            style={{
              height: '95vh',
              width: '80%',
              margin: '0 auto',
              marginTop: '3rem',
            }}
          >
            <MediaMessage
              message={`Flixy is not yet supported on this device yet.
              
The app is currently not supported on any mobile platforms.`}
            ></MediaMessage>
          </div>
        </MediaQuery>
      </>
    );
  }
}

export default App;
