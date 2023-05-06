import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [expenseData, setExpenseData] = useState({
    expenseTitle: "",
    amount: "",
    date: "",
  });

  const expenseTitleChange = (event) => {
    setExpenseData((prevSate) => {
      return { ...prevSate, expenseTitle: event.target.value };
    });
  };
  const amountChange = (event) => {
    setExpenseData((prevSate) => {
      return { ...prevSate, amount: event.target.value };
    });
  };
  const dateChange = (event) => {
    setExpenseData((prevSate) => {
      return { ...prevSate, date: event.target.value };
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();

    props.saveExpenseData({
      title: expenseData.expenseTitle,
      amount: +expenseData.amount,
      date: new Date(expenseData.date),
    });
    setExpenseData({
      expenseTitle: "",
      amount: "",
      date: "",
    });
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            onChange={expenseTitleChange}
            value={expenseData.expenseTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChange}
            value={expenseData.amount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChange}
            value={expenseData.date}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button onClick={props.onCancelHandler}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
