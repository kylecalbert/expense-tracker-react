import React, { useContext } from "react";
import { GlobalContext } from "../context/Globalstate.js";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((amount) => amount > 0)
    .reduce((sum, currentValue) => {
      return sum + currentValue;
    }, 0);

  const expense = amounts
    .filter((amount) => amount < 0)
    .reduce((sum, currentValue) => {
      return sum + currentValue;
    }, 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">£{income}</p>
      </div>

      <div>
        <h4>Expense</h4>
        <p className="money minus">£{expense}</p>{" "}
        {/* classname is money and extention is plus and minus */}
      </div>
    </div>
  );
};

export default IncomeExpenses;
