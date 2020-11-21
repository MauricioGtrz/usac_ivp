import "./App.css";
import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Team from "./pages/team";

import Header from "./components/header";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/team">
          <Team />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
