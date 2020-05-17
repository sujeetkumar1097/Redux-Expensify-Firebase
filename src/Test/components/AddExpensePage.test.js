import React from 'react'
import {shallow} from 'enzyme'
import {AddExpensePage} from '../../components/AddExpensePage'
import expenses from '../Fixtures/Expenses'

let startAddExpense, history,wrapper;

beforeAll(() => {
    startAddExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(<AddExpensePage startAddExpense={startAddExpense} history={history}/>)
     
})

test('Add expense render correctly', () => {
    // const addExpense = jest.fn()
    // const history = {push: jest.fn()}
    // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
     expect(wrapper).toMatchSnapshot()
})

test('handle on submit', () => {
    // const addExpense = jest.fn()
    // const history = {push: jest.fn()}
    // const wrapper = shallow(<AddExpensePage addExpense={addExpense} history={history}/>)
     wrapper.find('ExpenseForm').prop('onSubmit')(expenses[1])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startAddExpense).toHaveBeenCalledWith(expenses[1])
})