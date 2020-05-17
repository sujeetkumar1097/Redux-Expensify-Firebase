import React from 'react'
import {filters, altFilters} from '../Fixtures/Filters'
import {ExpenseListFilter} from '../../components/ExpenseListFilter'
import { shallow } from 'enzyme'
import moment from 'moment'

let setTextFilter,sortByDate,sortByAmount,setStartDate,setEndDate,wrapper

beforeEach(() =>  {
    setEndDate=jest.fn()
    setStartDate=jest.fn()
    sortByAmount=jest.fn()
    sortByDate=jest.fn()
    setTextFilter=jest.fn()
    wrapper=shallow(
        <ExpenseListFilter
        setEndDate={setEndDate}
        setStartDate={setStartDate}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setTextFilter={setTextFilter}
        filters={filters}
        />
    )
})

test('render Expense List Filter correctly', () => {
    expect(wrapper).toMatchSnapshot()
})

test('render Expense List Filter with Alt. data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    })
    expect(wrapper).toMatchSnapshot()
})

test('sort by date', () => {
    const value='date'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change', {
        target:{value}
    })
    expect(sortByDate).toHaveBeenCalledWith()
})
test('sort by amount', () => {
    const value='amount'
    wrapper.setProps({
        filters:altFilters
    })
    wrapper.find('select').simulate('change', {
        target:{value}
    })
    expect(sortByAmount).toHaveBeenCalledWith()
})

test('sort by Date Range', () => {
    const startDate = moment(0).add(2, 'years')
    const endDate = moment(0).add(4, 'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate})
    expect(setStartDate).toHaveBeenCalledWith(startDate)
    expect(setEndDate).toHaveBeenCalledWith(endDate)
})

test('on calender focused change', () => {
    const calenderFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calenderFocused)
    expect(wrapper.state('calenderFocused')).toBe(calenderFocused)

})