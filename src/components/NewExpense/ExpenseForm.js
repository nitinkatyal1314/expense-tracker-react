import React, {useState} from 'react';
import './ExpenseForm.css'

const  ExpenseForm = (props) => {

    const [userInput, userInputHandler] = useState({
        enteredTitle: '',
        enteredDate: '',
        enteredAmount: ''
    });

    const titleChangeHandler = (event) => {
        userInputHandler((prevState) => {
            return {...prevState, enteredTitle: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        userInputHandler((prevState) => {
            return {...prevState, enteredAmount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        userInputHandler((prevState) => {
            return {...prevState, enteredDate: event.target.value };
        });
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: userInput.enteredTitle,
            amount: +userInput.enteredAmount,
            date: new Date(userInput.enteredDate)
        };

        props.onSaveExpenseData(expenseData);

        // clear the data in the form post submition
        userInputHandler({
            enteredAmount: '',
            enteredTitle: '',
            enteredDate: ''
        });

    };

    return(
        <form onSubmit={formSubmitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={userInput.enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={userInput.enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" value={userInput.enteredDate} min="2019-01-01" step="2025-12-31" onChange={dateChangeHandler} />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;