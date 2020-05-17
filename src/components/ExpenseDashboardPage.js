import React from 'react';
import ExpenseList from './ExpenseList'
import ExpenseListFilter from './ExpenseListFilter'
import ExpenseSummary from './ExpenseSummary'

const ExpenseDashboardPage = () => (
    <div>
        <ExpenseSummary/>
        <ExpenseListFilter/>
       <ExpenseList/>
    </div>
    
)

export default ExpenseDashboardPage