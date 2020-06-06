import React from "react";
import Toolbar from "./components/ToolbarComponent";
import "./App.scss";
import MainComponent from "./components/MainComponent";

function App() {
  return (
    <div className="main-app">
      <Toolbar />
      <MainComponent />
    </div>
  );
}

export default App;
