import {EditExpensePage,} from '../../components/EditExpensePage'
import expenses from '../Fixtures/Expenses'
import { shallow } from 'enzyme'
import React from 'react'

let editExpense,startEditExpense, removeExpense,history, wrapper,startRemoveExpense

beforeEach(() => {
    startEditExpense = jest.fn()
    startRemoveExpense = jest.fn()
    history = {push: jest.fn()}
    wrapper = shallow(
        <EditExpensePage
        startEditExpense={startEditExpense}
        startRemoveExpense={startRemoveExpense}
        history = {history}
        expense = {expenses[2]}
        />)
})

test('render Edit Expense Page', () => {
    expect(wrapper).toMatchSnapshot()
})
test('handle Edit Expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[2])
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startEditExpense).toHaveBeenCalledWith(expenses[2].id, expenses[2])

})
test('handle remove Expense ', () => {
    wrapper.find('button').simulate('click')
    expect(history.push).toHaveBeenCalledWith('/')
    expect(startRemoveExpense).toHaveBeenCalledWith({
        id: expenses[2].id
    })
})