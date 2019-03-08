import React from 'react'
import Enzyme, {shallow} from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App'

Enzyme.configure({adapter: new EnzymeAdapter()})

const setup = (props={}, state= null) => {
    const wrapper =  shallow(<App {...props}/>)
    if (state) {
        wrapper.setState(state)
    }
    return wrapper
}

const findByTestAttr = (wrapper, val) => {
    return wrapper.find(`[data-test='${val}']`)
}

test('render whitout error', () => {
    const wrapper = setup()
    const appComponent = findByTestAttr(wrapper, 'component-app')
    expect(appComponent.length).toBe(1)
})

test('render increment Button', () => {
    const wrapper = setup()
    const button = findByTestAttr(wrapper, 'increment-button')
    expect(button.length).toBe(1)
})

test('render counter is displaying', () => {
    const wrapper = setup()
    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.length).toBe(1)
})

test('counter start at 0', () => {
    const wrapper = setup()
    const initialCounterState = wrapper.state('counter')
    expect(initialCounterState).toBe(0)
})

test('increment the counter display when click', () => {
    const counter = 7
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter + 1)
})

test('decrement the counter display when click', () => {
    const counter = 8
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    wrapper.update()

    const counterDisplay = findByTestAttr(wrapper, 'counter-display')
    expect(counterDisplay.text()).toContain(counter - 1)
})

test('should display error message when try to decrement counter at 0', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'decrement-button')
    button.simulate('click')
    wrapper.update()

    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(1)
})

test('should hide error message when inc again', () => {
    const counter = 0
    const wrapper = setup(null, {counter})

    const button = findByTestAttr(wrapper, 'increment-button')
    button.simulate('click')
    wrapper.update()

    const errorMessage = findByTestAttr(wrapper, 'error-message')
    expect(errorMessage.length).toBe(0)
})