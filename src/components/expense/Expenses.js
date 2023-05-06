import React, { useState } from "react";

import "./Expenses.css";
import Card from "../Card";
import ExpensesFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import ExpenseChart from "./ExpenseChart";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("2020");
  const onYearSelected = (year) => {
    setFilteredYear(year);
  };

  const filteredList = props.expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );
  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onSelected={onYearSelected} />
      <ExpenseChart expenses={filteredList} />
      <ExpenseList items={filteredList} />
    </Card>
  );
}

export default Expenses;
