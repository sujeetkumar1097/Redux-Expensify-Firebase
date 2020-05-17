import React from 'react'
import {shallow} from 'enzyme'
import LoadingLogoPage from '../../components/LoadingLogoPage'

test('Loading LOGO rendering', () => {
    const wrapper = shallow(<LoadingLogoPage/>)
    expect(wrapper).toMatchSnapshot()
})