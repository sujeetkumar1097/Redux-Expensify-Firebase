import React from 'react'
import {connect} from 'react-redux'
import {startLogin} from '../actions/Authentication'
 
 export const LoginPage = ({startLogin}) => {
    return (
        <div className="box-layout-login">
            <div className="box-layout-login__box">
                <h1 className="box-layout-login__title"> Expensify App</h1>
                <p>Its time to get your Expense under control</p>
                <button className="button" onClick={startLogin}>LOGIN with GOOGLE</button>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        startLogin: () => dispatch(startLogin())
    }
}

export default connect(undefined, mapDispatchToProps)(LoginPage)