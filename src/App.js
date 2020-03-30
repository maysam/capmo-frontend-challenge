import React from "react";

import { RestaurentMenu } from "./features/restaurent_menu";
import { MenuContextProvider } from "./restaurent_context_provider";

import "./App.css";

const App = () => (
  <MenuContextProvider>
    <div className="App">
      <RestaurentMenu />
    </div>
  </MenuContextProvider>
);

export default App;
