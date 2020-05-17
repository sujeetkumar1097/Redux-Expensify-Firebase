import React from 'react'
import {shallow} from 'enzyme'
import  {ExpenseList} from '../../components/ExpenseList'
import expenses from '../Fixtures/Expenses'

test('Expense List with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Expense List with Expenses', () => {
    const wrapper = shallow(<ExpenseList expenses={[]}/>)
    expect(wrapper).toMatchSnapshot()
})