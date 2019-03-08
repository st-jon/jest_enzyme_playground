import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, checkProps} from '../../test/testUtils'
import Congrats from '../Components/Congrats'


const defaultProps = {success: false}

const setup = (props={}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<Congrats {...setupProps}/>)
    
}

test('render whitoout error', () => {
    const wrapper = setup({success: false})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.length).toBe(1)
})

test('render no text when success is false', () => {
    const wrapper = setup({success: false})
    const congratsComponent = findByTestAttr(wrapper, 'component-congrats')
    expect(congratsComponent.text()).toBe('')
})

test('render non empty message when succes is true', () => {
    const wrapper = setup({success: true})
    const message = findByTestAttr(wrapper, 'congrats-message')
    expect(message.text().length).not.toBe(0)
})

test('not throw a warning with expected props', () => {
    checkProps(Congrats, {success: true})
})