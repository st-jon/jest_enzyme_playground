import {createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import ReduxThunk from 'redux-thunk'
import reduxPromise from 'redux-promise'
import {composeWithDevTools} from 'redux-devtools-extension'


export const middlewares = [ReduxThunk, reduxPromise]

const createStoreWithMiddleware = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middlewares)))


export default createStoreWithMiddleware