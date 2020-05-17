import React from 'react'
//import ReactShallowRenderer from 'react-test-renderer/shallow'
//import Header from '../../components/Header'
import {shallow} from 'enzyme'
import {Header} from '../../components/Header'

test('Header component check', ()=> {
    const wrapper = shallow(<Header startLogOut={() => {}}/>)
    expect(wrapper).toMatchSnapshot();
    //expect(wrapper.find('h1').text()).toBe('Expensify')
    // const renderer = new ReactShallowRenderer()
    // renderer.render(<Header/>)
    // expect(renderer.getRenderOutput()).toMatchSnapshot()
})

test('call StartLogOut on Button click', () => {
    const startLogout = jest.fn()
    const wrapper = shallow(<Header startLogOut={startLogout}/>)
    wrapper.find('button').simulate('click')
    expect(startLogout).toHaveBeenCalled()
})