import React from 'react'
import {shallow} from 'enzyme'
import NotFoundPage from '../../components/PageNotFound'

test('Not Found Page Render Correctly', () =>{
    const wrapper = shallow(<NotFoundPage/>)
    expect(wrapper).toMatchSnapshot()
})