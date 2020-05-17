import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import ExpenseFilter from '../selectors/ExpenseFilter'
import ExpenseTotal from '../selectors/ExpenseTotal'
import numeral from 'numeral'

export const ExpenseSummary = ({expenseCount, expenseTotal}) => {
    const expenseWord = expenseCount === 1 ? 'Expense' : 'Expenses'
    const formattedExpensesTotal = numeral(expenseTotal/100).format('$0,0.00')
    
    return (
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">
                    Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span>
                </h1>
                <div className="page-header__action">
                    <Link className="button" to="/expense">Add Expense</Link>
                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const visibleExpenses = ExpenseFilter(state.expenses, state.filters)
    return {
        expenseCount: visibleExpenses.length,
        expenseTotal: ExpenseTotal(visibleExpenses)
    }
}

export default connect(mapStateToProps)(ExpenseSummary)