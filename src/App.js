import React from "react";
import CardList from "./components/card/card-list/card-list.component";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <h1 className="app-title"> Monster Roladex </h1>
      <CardList />
    </div>
  );
};

export default App;
