import React from 'react';
import {NavLink} from 'react-router-dom'
import moment from 'moment'
import numeral from 'numeral'
 
const ExpenseListItems = ({ id, description, amount, createdAt}) => {
    //console.log("this is expense: obj ==>>",id);
    return (
            <NavLink className="list-item" to={`/edit/${id}`}>
                <div>
                    <h3 className="list-item__title">{description}</h3>
                    <span className="list-item__sub-title">{moment(createdAt).format('MMMM Do, YYYY')}</span>
                </div>
                <h3 className="list-item__amount">{numeral(amount/100).format('$0,0.00')}</h3>
            </NavLink>
    )
}
export default ExpenseListItems

