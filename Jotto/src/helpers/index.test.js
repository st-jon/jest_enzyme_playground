import {getLetterMatchCount} from './'

describe('getLetterMatchCount', () => {

    const secretWord= 'party'

    test('it return the correct cout when no matching letter', () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord)
        expect(letterMatchCount).toBe(0)
    })

    test('return the correct count when 3 letters match', () => {
        const letterMatchCount = getLetterMatchCount('train', secretWord)
        expect(letterMatchCount).toBe(3)
    })

    test('return correct count when there are duplicate letters in guess', () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord)
        expect(letterMatchCount).toBe(3)
    })
})