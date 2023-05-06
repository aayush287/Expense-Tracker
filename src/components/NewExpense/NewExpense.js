import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css'

const NewExpense = (props) => {
    const [showForm, setShowForm] = useState(false);

    const showFormHandler = () => {
        setShowForm(true);
    };

    const onCancelHandler = () => {
        setShowForm(false)
    };

    return (
        <div className="new-expense">
            {
                showForm ? <ExpenseForm onCancelHandler = {onCancelHandler} saveExpenseData = {props.expenseCreateHandler}/> : <button onClick = {showFormHandler}>Add Expense</button>
            }
            
        </div>
    )
}

export default NewExpense;