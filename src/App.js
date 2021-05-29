import React, {useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  // receives data from expenseform
  const [expenses, setExpenses] = useState([]);

  const newExpenseAddedHandler = (expenseData) => {
     setExpenses((prevExpenses) => {
       return [expenseData, ...prevExpenses];
     });
  };

  return (
    <div>
      <NewExpense onNewExpenseAdded={newExpenseAddedHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
