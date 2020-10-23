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

/**
 * We have 3 main pages:
 * => Dashboard
 * => Search
 * => Detail (displays movie details)
 * => Player (load video)
 */
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
          <Route path="/player/:movieId">
            <Player />
          </Route>
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
