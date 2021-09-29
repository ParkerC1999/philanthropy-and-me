import React from "react";
import "./App.css";
import Charitycauses from "./components/Charitycauses";
import Organizations from "./components/Organizations";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";

function App() {
  return (
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
  );
}

export default App;
