import { createStore, combineReducers, applyMiddleware , compose} from "redux";
import thunk from 'redux-thunk'
import ExpensesReducer from '../reducers/Expenses'
import FiltersReducers from '../reducers/Filters'
import AuthenticationReducer from '../reducers/Authentication'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
//const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export default () => {
    const store = createStore(
        combineReducers({
             expenses: ExpensesReducer,
             filters: FiltersReducers,
             authentication: AuthenticationReducer
        }),  
        composeEnhancer(applyMiddleware(thunk))
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    return store
}