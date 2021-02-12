import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/Globalstate.js";

function AddTransaction() {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const { addTransaction } = useContext(GlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 1000000000),
      text,
      amount,
    };
    addTransaction(newTransaction);
  };

  // const setText =(e)=>{
  //     setText(e.target.value)
  //     e.preventDefault();
  //   }

  return (
    <div>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            onChange={(e) => setText(e.target.value)}
            value={text}
            type="text"
            placeholder="Enter Text"
          />
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>

          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            id="amount"
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </div>
  );
}

export default AddTransaction;
