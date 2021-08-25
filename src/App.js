import "./App.css";
import React from "react";
import Home from "./home";
import ArticleHome from "./article";
import Article from "./component/articles/art";
import Contact from "./component/aboutNcontact/contact";
import About from "./component/aboutNcontact/about";
import Navbar from "./component/home/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/articles">
            <ArticleHome />
          </Route>
          <Route exact path="/articles/:id">
            <Article />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
