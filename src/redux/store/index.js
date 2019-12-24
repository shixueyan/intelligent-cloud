/**
 * create at 10/08/18
 */
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import { reducer } from '../reducer'


//export default ()=>createStore(reducer,applyMiddleware(logger))

//export default ()=>createStore(reducer,composeWithDevTools())
export default (prevState)=>createStore(reducer,prevState)