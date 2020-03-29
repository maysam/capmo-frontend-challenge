import React from "react";
import { Counter } from "./features/counter/Counter";
import { RestaurentMenu } from "./features/restaurent_menu";
import "./App.css";

function App() {
  return (
    <div className="App">
      <RestaurentMenu />
      <Counter />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
    </div>
  );
}

export default App;
