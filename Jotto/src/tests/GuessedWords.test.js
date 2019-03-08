import React from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, checkProps} from '../../test/testUtils'
import GuessedWords from '../Components/GuessedWords'

const defaultProps = {
    guessedWords: [
        {guessedWord: 'train', letterMatchCount: 3}
    ],
}

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('not throw a warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)
})

describe('if there are no words guessed', () => {

    let wrapper
    beforeEach(() => {
        wrapper = setup({guessedWords: []})
    })

    test('render whitout error', () => {
        const component = findByTestAttr(wrapper, 'component-guessedWord')
        expect(component.length).toBe(1)
    })

    test('render instruction to guess a word', () => {
        const instructions = findByTestAttr(wrapper, 'guessedWord-instruction')
        expect(instructions.text().length).not.toBe(0)
    })

})

describe('if there are words guessed', () => {

    let wrapper
    const guessedWords = [
        {guessedWord: 'train', letterMatchCount: 3},
        {guessedWord: 'agile', letterMatchCount: 1},
        {guessedWord: 'party', letterMatchCount: 5},
    ]

    beforeEach(() => {
        wrapper = setup({guessedWords})
    })
    
    test('render whitout error', () => {
        const component = findByTestAttr(wrapper, 'component-guessedWord')
        expect(component.length).toBe(1)
    })

    test('render guessed words section', () => {
        const guessedWordsDiv = findByTestAttr(wrapper, 'guessed-words')
        expect(guessedWordsDiv.length).toBe(1)
    })

    test('display the correct number of guessed words', () => {
        const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word')
        expect(guessedWordsNodes.length).toBe(guessedWords.length)
    })
})