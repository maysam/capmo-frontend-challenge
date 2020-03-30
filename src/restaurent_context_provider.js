import React, { useReducer, createContext } from "react";

import { reducer, initialState } from "./reducer";

export const MenuContext = createContext();

export const MenuContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <MenuContext.Provider value={[state.menu, dispatch]}>
      {children}
    </MenuContext.Provider>
  );
};
