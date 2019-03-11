import {actionTypes} from '../actions/actions'
import successReducer from './successReducer'


test('returns default state "false" when no action is passed', () => {
    const newState = successReducer(undefined, {})
    expect(newState).toBe(false)
})

test('returns "true" when an action of type CORRECT_GUESS is passed', () => {
    const newState = successReducer(undefined, {type: actionTypes.CORRECT_GUESS})
    expect(newState).toBe(true)

})