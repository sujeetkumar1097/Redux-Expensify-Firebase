import React from 'react'
import {connect} from 'react-redux'
import ExpenseListItem from './ExpenseListItems'
import ExpenseFilter from '../selectors/ExpenseFilter'

export const ExpenseList = (props) => (
    <div className="content-container">
        <div className="list-header">
            <div className="show-for-mobile">Expenses</div>
            <div className="show-for-desktop">Expense</div>
            <div className="show-for-desktop">Amount</div>
        </div>
        {/* {props.filters.text}
        {props.expenses.length} */}
        <div className="list-body">
            {
                props.expenses.length === 0 ? (
                    <div className="list-item list-item--message">
                        <span>No Expense Added Yet</span>
                    </div>
                ) : (
                    props.expenses.map(expense => 
                            (<ExpenseListItem key={expense.id} {...expense}/>)
                        )
                    )
            }
        </div>
    </div>
)

const mapStateToProps = (state) => {
    return {
        expenses: ExpenseFilter(state.expenses,state.filters),
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseList)