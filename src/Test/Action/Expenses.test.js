import {startAddExpense,addExpense, removeExpense,startRemoveExpense, 
    editExpense,startEditExpense, setExpenses,startSetExpenses} from '../../actions/Expenses'
import expenses from '../Fixtures/Expenses'
import congiureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import database from '../../firebaseDB/firebase'

const createMockStore = congiureMockStore([thunk])
const uid = 'thisismytestuid'
const defaultAuthState = {authentication: {uid}}

beforeEach((done) => {
    const expenseData = {}
    expenses.forEach(({id,description,note,amount,createdAt}) =>{
        expenseData[id]= {description,note,amount,createdAt}
    }) 
    database.ref(`users/${uid}/expenses`).set(expenseData).then(() => done())
})

test('for delete expense', () => {
    const action = removeExpense({id: '123asd'})
    expect(action).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123asd'
    })
})

test('start removing expenses from database', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    store.dispatch(startRemoveExpense({ id })).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'REMOVE_EXPENSE',
            id
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapShot) => {
        expect(snapShot.val()).toBeFalsy()
        done()
    })
})

test('edit expense', () =>{
    const action = editExpense('123asd', {note: 'new note'})
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '123asd',
        updates: {
            note:'new note'
        }
    })
})
test('start edit expense from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    const id = expenses[0].id
    const updates = {amount: 12.50}
    store.dispatch(startEditExpense(id,updates)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'EDIT_EXPENSE',
            id,
            updates
        })
        return database.ref(`users/${uid}/expenses/${id}`).once('value')
    }).then((snapShot) =>{
         expect(snapShot.val().amount).toBe(updates.amount)
         done()
    })
})

test('add expense with provided value', () => {
    const action = addExpense(expenses[2])
    expect(action).toEqual({
        type:'ADD_EXPENSE',
        expense: expenses[2]
    })

})
test('Add expense to database and store', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: 'Mouse',
        amount: 300,
        createdAt: 1000,
        note: 'this is better'
    }
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense: {
            id:expect.any(String),
            //...expenseData
            description: 'Mouse',
            amount: 300,
            createdAt: 1000,
            note: 'this is better'
           } 
        })
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')    
    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(expenseData)
        done()
    })
})

test('Add expense to database and store with default values', (done) => {
    const store = createMockStore(defaultAuthState)
    const expenseData = {
        description: '',
        amount: 0,
        createdAt: 0,
        note: ''
    }
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
           type:'ADD_EXPENSE',
           expense: {
            id:expect.any(String),
            //...expenseData
            description: '',
            amount: 0,
            createdAt: 0,
            note: ''
           } 
        })
       return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once('value')    
    }).then((snapShot) => {
        expect(snapShot.val()).toEqual(expenseData)
        done()
    })
})

test('set expense action object with data', () => {
    const action = setExpenses(expenses)
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses 
    })
})

test('fetch the expenses from firebase', (done) => {
    const store = createMockStore(defaultAuthState)
    store.dispatch(startSetExpenses()).then (() => {
        const actions = store.getActions()
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses 
        })
        done()
    })
    
})

