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

describe("redux props", () => {

    test('has success state as props', () => {
        const success = true
        const wrapper = setup({success})
        const successProp = wrapper.instance().props.success
        expect(successProp).toBe(success)
    })

    // Don't work anymore with redux 6 ... Find another strategy

    // test('guessWord action creator is a function prop', () => {
    //     const wrapper = setup()
    //     const guessWordProp = wrapper.instance().props.guessWord
    //     expect(guessWordProp).toBeInstanceOf(Function) 
    // })
})

describe("guessWord action creator call", () => {
    let guessWordMock,
        wrapper
    const guessedWord = 'train'

    beforeEach(() => {
        guessWordMock = jest.fn()
        const props = { guessWord: guessWordMock }
        wrapper = shallow(<UnconnectedInput {...props} />)

        wrapper.instance().inputBox.current = {value: guessedWord}
        const submitButton = findByTestAttr(wrapper, 'component-submitButton')
        submitButton.simulate('click', {
            preventDefault: () => {
            }
        })
        
    })

    test('guessWord runs on click submit', () => {
        const count = guessWordMock.mock.calls.length
        expect(count).toBe(1)
    }) 

    test('guessWord call with the input box value as argument', () => {
        const guessedWordArg = guessWordMock.mock.calls[0][0]
        expect(guessedWordArg).toBe(guessedWord)
    })

    test('clear the input box after submitting', () => {
        expect(wrapper.instance().inputBox.current.value).toBe('')
    })
})
