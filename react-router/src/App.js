import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Contact from "./pages/contact";

function App(props) {
    return (
        <React.Fragment>
            <Link to="/">Home</Link> | &nbsp;
            <Link to="/blog">Blog</Link> | &nbsp;
            <Link to="/contact">Contact</Link>
            <Switch>
                <Route path="/" exact={true} render={() => <Home />} />
                <Route path="/blog" render={(props) => <Blog />} />
                <Route path="/contact" render={(props) => <Contact />} />
                <Route render={() => <div>Route inconnue</div>} />
            </Switch>
        </React.Fragment>
    );
}

export default App;
