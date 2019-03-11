import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr} from '../../test/testUtils'
import Input, {UnconnectedInput} from '../Components/Input'


const setup = (initialState = {}) => {
    const wrapper = shallow(<UnconnectedInput {...initialState} />)
    return wrapper
}

describe("render", () => {

    describe('word has not been guessed', () => {

        let wrapper
        beforeEach(() => {
            const initialState = {success: false}
            wrapper = setup(initialState)
        }) 

        test('render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })

        test('render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'component-inputBox')
            expect(inputBox.length).toBe(1)
        })

        test('render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'component-submitButton')
            expect(submitButton.length).toBe(1)
        })

    })

    describe('word has been guessed', () => {

        let wrapper
        beforeEach(() => {
            const initialState = {success: true}
            wrapper = setup(initialState)
        }) 

        test('render component without error', () => {
            const component = findByTestAttr(wrapper, 'component-input')
            expect(component.length).toBe(1)
        })
        test('does not render input box', () => {
            const inputBox = findByTestAttr(wrapper, 'component-inputBox')
            expect(inputBox.length).toBe(0)
        })
        test('does not render submit button', () => {
            const submitButton = findByTestAttr(wrapper, 'component-submitButton')
            expect(submitButton.length).toBe(0)
        })

    })

})

describe("update state", () => {

    test('', () => {

    })
})
