import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer.js";
//Initial State

const initialState = {
  transactions: [],
};

//create Context
export const GlobalContext = createContext(initialState); //so we can access it from other variables

//Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //action
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id }); //setting payload to id
  }

  //action
  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id }); //setting payload to id
  }

  //action
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction }); //setting payload to id
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
