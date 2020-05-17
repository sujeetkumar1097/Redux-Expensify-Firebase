import React from 'react'
import {shallow} from 'enzyme'
import ExpenseDashboardPage from '../../components/ExpenseDashboardPage'

test('Not Found Page Render Correctly', () =>{
    const wrapper = shallow(<ExpenseDashboardPage/>)
    expect(wrapper).toMatchSnapshot()
})