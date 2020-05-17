import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {startLogOut} from '../actions/Authentication'


export const Header = ({startLogOut}) => (
    <div className="header">
        {/* <NavLink to='/dashboard' activeClassName='is-active'>Dashboard</NavLink>
        <NavLink to='/create' activeClassName='is-active'>Create Expense</NavLink> */}
        {/* <NavLink to='/edit'>Edit Expense</NavLink> */}
        {/* <NavLink to='/help' activeClassName=''>Help</NavLink> */}
        <div className="content-container">
            <div className="header__content">
                <Link className="header__title" to='/dashboard'>
                    <h1>Expensify</h1>
                </Link>
                <button className="button button--link" onClick={startLogOut}>LOGOUT</button>
            </div>
        </div>
        
    </div>
)

const mapDispatcherToProp = (dispatch) => ({
    startLogOut: () => dispatch(startLogOut())
})

export default connect(undefined, mapDispatcherToProp)(Header)