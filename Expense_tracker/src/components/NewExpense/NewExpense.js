import React from 'react'
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
    const savedata = (enterdata) => {
        const expensedata = {
            ...enterdata,
            id: Math.random().toString()
        }
        props.onaddExpense(expensedata)
    }
    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpenseData={savedata} />
        </div>
    )
}

export default NewExpense;
