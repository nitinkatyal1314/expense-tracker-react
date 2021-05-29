import React, { useState } from "react";
import "./Expenses.css";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const currentYear = new Date().getFullYear();
  const [selectedYear, setYearFilter] = useState(currentYear);

  const yearChangeHandler = (selectedYear) => {
    setYearFilter(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
      return expense.date.getFullYear().toString() === selectedYear.toString();
  });

  return (
    <Card className="expenses">
      <ExpenseFilter selected={selectedYear} onYearChange={yearChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
