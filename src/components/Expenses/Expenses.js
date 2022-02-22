import React, { useState } from 'react';
import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import Card from '../UI/Card';
import './Expenses.css'

const Expenses = (props) => {

    //First Way to Loop
    // const ExpenseList = [];
    // for(const expense of props.items){        
    //     ExpenseList.push(<ExpenseItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date} />);
    // }

    //Second Way to Loop
    //const List = props.list;
    // List.map((expense, index) => {
    //     return (
    //         <ExpenseItem key={expense.title} title={expense.title} amount={expense.amount} date={expense.date} />
    //     )
    // })

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">  
                <ExpensesFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler} />
                {/* {filteredExpenses.length === 0 && <p>No Expenses Found.</p>}
                {filteredExpenses.length > 0 && filteredExpenses.map(expense => <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} year={filteredYear} />) } */}
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>        
    )
}

export default Expenses;