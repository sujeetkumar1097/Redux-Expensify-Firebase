import React from 'react'
import {shallow} from 'enzyme'
import ExpenseForm from '../../components/ExpenseForm'
import expenses from '../Fixtures/Expenses'
import moment from "moment"

test('Expense form without data', () => {
    const wrapper = shallow(<ExpenseForm/>)
    expect(wrapper).toMatchSnapshot()
})

test('Expense form with expense data', () => {
    const wrapper = shallow(<ExpenseForm expense={expenses[1]}/>)
    expect(wrapper).toMatchSnapshot()
})

test('Expense form for invalid submittion', () => {
    const wrapper = shallow(<ExpenseForm />)
    expect(wrapper).toMatchSnapshot()
    wrapper.find('form').simulate('submit', {
        preventDefault:() => {}
    })
    expect(wrapper.state('error').length).toBeGreaterThan(0)
    expect(wrapper).toMatchSnapshot()
})

test('Expense form set description on input change', () => {
    const value = 'new Desc'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(0).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('description')).toBe(value)
})

// test('Expense form set textarea on change', () => {
//     const value = 'new note'
//     const wrapper = shallow(<ExpenseForm />)
//     wrapper.find('form').simulate('change', {
//         persist: {}
//     })
//     wrapper.find('textarea').simulate('change', {
//         target:{value}
//     })
//     expect(wrapper.state('note')).toBe(value)
// })
test('Expense form set amount if valid', () => {
    const value = '12.45'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe(value)
})
test('Expense form set amount if not valid', () => {
    const value = '12.4567'
    const wrapper = shallow(<ExpenseForm />)
    wrapper.find('input').at(1).simulate('change', {
        target:{value}
    })
    expect(wrapper.state('amount')).toBe('')
})
test('Form submittion on valid date', () => {
    const onSubmitSpy = jest.fn()
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>)
    wrapper.find('form').simulate('submit', {
        preventDefault:() => {}
    })
    expect(wrapper.state('error')).toBe('')
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    })
})
test('on date change ', () => {
    const now = moment()
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onDateChange')(now)
    expect(wrapper.state('createdAt')).toEqual(now)
})
test('on date change ', () => {
    const focused = true
    const wrapper = shallow(<ExpenseForm/>)
    wrapper.find('SingleDatePicker').prop('onFocusChange')({focused})
    expect(wrapper.state('calenderFocused')).toEqual(focused)
})