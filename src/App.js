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

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:3001/About")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route exact path="/about">
                        <About />
                        <p className="App-intro">{this.state.apiResponse}</p>
                    </Route>
                    <Route exact path="/Events">
                        <Events />
                    </Route>
                    <Route exact path="/News">
                        <News />
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
}

export default App;
