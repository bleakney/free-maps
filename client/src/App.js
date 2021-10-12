// import dependencies
import React, { useEffect } from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

// import stylesheet and fonts
import "./index.scss";
import WebFont from "webfontloader";

// import components

//footer 
import Footer from './components/Footer';
import '../src/components/Footer/style.css'

//search
import Search from './components/Search';

import Map from "./components/Map";
import Header from "./components/Header";

//import pages
import NoMatch from "./pages/NoMatch";

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
  
  // import google fonts
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
    <div className="app-container">
      <Header className="header" />
      <Search />
      <Map />
      <Footer/>
    </div>
    </ApolloProvider>
  );
}

export default App;
