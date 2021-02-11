import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate.js";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((sum, currentValue) => {
    return sum + currentValue;
  }, 0);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id="balance">£{total}</h1>
    </div>
  );
};

export default Balance;
