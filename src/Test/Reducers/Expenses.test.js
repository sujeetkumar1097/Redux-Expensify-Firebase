import expenses from '../Fixtures/Expenses'
import expensesReducer from '../../reducers/Expenses'

test('Default State', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'})
    expect(state).toEqual([])
})

test('remove Expense by ID found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('remove Expense by ID not found', () =>{
    const action = {
        type: 'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses, action)
    expect(state).toEqual(expenses)
})

test('Add expense', () => {
    const expense = {id:'109', description: 'Laptop', note: '', amount: 29500,createdAt: 20000}
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses, expense])

})

test('Set expense', () => {
    const action = {
        type:'SET_EXPENSES',
        expenses: [expenses[1]]
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[1]])

})

// test('Edit expense with matching ID', () => {
//     const amount =2000
//     const action = {
//         type:'EDIT_EXPENSE',
//         id:expenses[1].id,
//         updates:{
//             amount
//         }
//     }
//     const state = expensesReducer(expenses,action)
//     expect(state[1].amount).toBe(amount)

// })
// test('Edit expense ID fails to match', () => {
//     const amount =122000
//     const action = {
//         type:'EDIT_EXPENSE',
//         id:'-1',
//         updates:{
//             amount
//         }
//     }
//     const state = expensesReducer(expenses,action)
//     expect(state).toBe(expenses)

// })