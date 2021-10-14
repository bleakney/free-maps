// import dependencies
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
// stylesheet and fonts
import "./index.scss";
import WebFont from "webfontloader";
// Import Pages
import Home from "./pages/Home";
import MapView from './pages/MapView';
import NoMatch from "./pages/NoMatch";
// import header and footer
import Header from "./components/Header";
import Footer from "./components/Footer";
import Particles from "react-particles-js";

// set up server with @apollo/client
const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  // implement google fonts
  useEffect(() => {
    WebFont.load({
      google: {
        families: [
          "Playfair Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900",
          "Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900",
        ],
      },
    });
  });

  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="app-container">
            <Header />
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path='/Map' component={MapView} />
              <Route exact path="/404" component={NoMatch} />
            </Switch>
            <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
