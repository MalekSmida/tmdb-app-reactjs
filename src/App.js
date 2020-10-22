import React from "react";
import "./App.scss";
import { Navbar } from "./component";
import { Dashboard } from "./page";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
