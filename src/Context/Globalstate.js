import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.Js";
//Initial State

const initialState = {
  transactions: [
    { id: 1, text: "Flower", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Video Game", amount: -20 },
    { id: 4, text: "Grocerry", amount: -20 },
  ],
};

//create Context
export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return <GlobalContext.Provider>{children}</GlobalContext.Provider>;
};
