import React from 'react'
import {shallow} from 'enzyme'
import  ExpenseListItems from '../../components/ExpenseListItems'
import expenses from '../Fixtures/Expenses'

test('Expense List Render Correctly', () =>{
    const wrapper = shallow(<ExpenseListItems expenses={expenses[0]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Expense List Render Correctly', () =>{
    const wrapper = shallow(<ExpenseListItems expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})