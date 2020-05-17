import React from 'react';
import {BrowserRouter, Router, Route, Switch} from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import AddExpensePage from '../components/AddExpensePage'
import Header from '../components/Header'
import EditExpensePage from '../components/EditExpensePage'
import HelpPage from '../components/HelpPage'
import PageNotFound from '../components/PageNotFound'
import ReducerHome from '../components/ReducerHome'
//import Post from '../components/Post'
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

export const history = createHistory()

const AppRouter = () => (
    
    //<BrowserRouter>
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path='/' component={LoginPage} exact={true}/>
                <PrivateRoute path='/dashboard' component={ExpenseDashboardPage} />
                <PrivateRoute path='/expense' component={AddExpensePage}/>
                <PrivateRoute path='/edit/:id' component={EditExpensePage}/>
                {/* <Route path='/help' component={HelpPage}/> */}
                <Route  component={PageNotFound}/>
             </Switch>
            {/* <Switch>
                <Route path='/' component={ExpenseDashboardPage} exact={true}/>
                <Route path='/create' component={props => <AddExpensePage {...props} />}/>
                <Route path='/edit/:id' component={props => <EditExpensePage {...props}/>}/>
                <Route path='/help' component={HelpPage}/>
                <Route path='/reducer' component={props => <ReducerHome {...props} />} exact={true}/>
                <Route path='/reducer/:post_id' component={props => <Post {...props} />}/>
                <Route  component={PageNotFound}/>
             </Switch> */}
        </div>
    </Router>
    //</BrowserRouter>
)

export default AppRouter