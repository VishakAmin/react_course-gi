import React, { useState } from 'react'
import Card from '../Card'
import ExpensesFilter from './ExpenseFilter'
import './Expense.css'
import ExpenseChart from './ExpenseChart'
import ExpensesList from './ExpenseList'


const Expense = (props) => {
    const [filterYear, setFilterYear] = useState()

    const handleFilter = (selectedYear) => {
        setFilterYear(selectedYear)
    }

    console.log(props.items)
    // expenses.map(ex => (
    //     console.log(ex.title)
    // ))


    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    });

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filterYear}
                onChangeFilter={handleFilter}
            />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />
        </Card>
    )
}

export default Expense
