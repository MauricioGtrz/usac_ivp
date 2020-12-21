import "./App.css";
import React, {Component} from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Team from "./pages/team";
import News from "./pages/news";
import Events from "./pages/events";

import Header from "./components/header";
import Footer from "./components/footer";

import "bootstrap/dist/css/bootstrap.css";

import { HashRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Header />
                <Switch>
                    <Route exact path="/usac_ivp/#/">
                        <Home />
                    </Route>
                    <Route exact path="/usac_ivp/#/about">
                        <About />
                    </Route>
                    <Route exact path="/usac_ivp/#/Events">
                        <Events />
                    </Route>
                    <Route exact path="/usac_ivp/#/News">
                        <News />
                    </Route>
                    <Route exact path="/usac_ivp/#/contact">
                        <Contact />
                    </Route>
                    <Route exact path="/usac_ivp/#/team">
                        <Team />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        );
    }
}

export default App;