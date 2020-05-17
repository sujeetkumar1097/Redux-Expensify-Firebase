import { v4 as uuidv4 } from 'uuid';
import database from '../firebaseDB/firebase'

export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense  
})

export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid
        const {
            description = '',
            note = '',
            amount = 0,
            createdAt = 0
        } = expenseData

        const expense = {description, note,amount, createdAt}

       return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id:ref.key,
                ...expense
                // description:expense.description,
                // note:expense.note,
                // amount:expense.amount,
                // createdAt:expense.createdAt
            }))
        })
    }
}

export const removeExpense = ({id} = {}) => ({
    type:'REMOVE_EXPENSE',
    id
})

export const startRemoveExpense = ({id} = {}) => {
    return(dispatch, getState) => {
        const uid = getState().authentication.uid
       return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({id}))
        })
    }
}

export const editExpense = (id,updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
})

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() =>{
            dispatch(editExpense(id, updates))
        })
    }
}

export const setExpenses = (expenses) => ({
    type: 'SET_EXPENSES',
    expenses  
})

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().authentication.uid
        return database.ref(`users/${uid}/expenses`).once('value').then((snapShot) => {
            //console.log('startSetExpensexxxxx==>>',snapShot.val())
            const expenses =[]
            snapShot.forEach((childSnapShot) => {
                //console.log('startSetExpensexxxxx==>>',childSnapShot.val())
                expenses.push({
                    id:childSnapShot.key,
                    ...childSnapShot.val()
                    // description:childSnapShot.val().description,
                    // note:childSnapShot.val().note,
                    // amount:childSnapShot.val().amount,
                    // createdAt:childSnapShot.val().createdAt
                })
            })
            dispatch(setExpenses(expenses))
        })
    }
}