import React from 'react';
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'
import Header from '../components/Header'

export const PrivateRoute = ({
    isAuthenticated,
    component: Component,
    ...rest
}) => (
    <Route {...rest} component={(props) => (
            isAuthenticated ? (
                <div>
                   <Header/>
                    <Component {...props}/>
                </div>
            ) : (
                <div>
                <Redirect to='/'/>
                </div>
                
            )
    )}/>
)

// export const PrivateRoute = (props) => (
//     <Route {...props}/>
// )

const mapStateToProps = (state) =>{
    return {
        isAuthenticated: !!state.authentication.uid
    }
}

export default connect(mapStateToProps)(PrivateRoute)
