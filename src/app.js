import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter'
import {Provider} from 'react-redux'
import ConfigureStore from './store/ConfigureStore'
import {login, logout} from './actions/Authentication'
import {addExpense} from './actions/Expenses'
import {setTextFilter} from './actions/Filters'
import getExpenseFilter from './selectors/ExpenseFilter'
import {startSetExpenses} from './actions/Expenses'
import {firebase} from './firebaseDB/firebase'
import {history} from './router/AppRouter'
import LoadingLogoPage from './components/LoadingLogoPage'
import './styles/styles.scss'
import 'normalize.css/normalize.css'
import 'react-dates/lib/css/_datepicker.css'


const store = ConfigureStore();
const jsx = (
    <Provider store={store}><AppRouter/></Provider>
)
let hasRendered = false
const renderApp = () => {
    if(!hasRendered) {
        ReactDOM.render(jsx, document.getElementById('root'))
        hasRendered = true
    }
}
// store.dispatch(addExpense({description:'water bill', amount: 4500}))
// store.dispatch(addExpense({description:'rent', amount:95000}))
// store.dispatch(addExpense({description:'gas bill', createdAt: 1000}))
// store.dispatch(setTextFilter('bill'))

// const state = store.getState()
// const expenseFilter = getExpenseFilter(state.expenses, state.filters)
//console.log("expenseFilter ==>>", expenseFilter)
ReactDOM.render(<LoadingLogoPage/>, document.getElementById('root'))

//ReactDOM.render(<Provider store={store}><AppRouter/></Provider>, document.getElementById('root'))

firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        store.dispatch(login(user.uid))
        store.dispatch(startSetExpenses()).then(() =>{
        renderApp() 
        if(history.location.pathname === '/') {
            console.log('inside iffffff')
            history.push('/dashboard')
        }
        })
        console.log('LOGGED IN')
    } else {
        store.dispatch(logout())
        renderApp() 
        history.push('/')
        console.log('LOGGED OUT')
    }
})