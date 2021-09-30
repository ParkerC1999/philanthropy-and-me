import React from "react";
import "./App.css";
import Charitycauses from "./components/Charitycauses";
import Organizations from "./components/Organizations";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';


import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Header></Header>
          <main>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/Charitycauses" component={Charitycauses} />
              <Route exact path="/Organizations" component={Organizations} />
              <Route exact path="/Signup" component={Signup} />
              <Route />
              <Route />
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </Router>
    </ApolloProvider>

  );
}

export default App;
