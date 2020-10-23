import React from "react";
import "./App.scss";
import { Navbar } from "./component";
import { Dashboard, Search, Detail, Player } from "./page";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route exact path="/">
            <Navbar />
            <Dashboard />
          </Route>
          <Route path="/search/:searchTerm">
            <Navbar />
            <Search />
          </Route>
          <Route path="/detail/:movieId">
            <Navbar />
            <Detail />
          </Route>
          <Route path="/player">
            <Player />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
