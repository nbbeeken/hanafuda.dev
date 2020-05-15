import { combineReducers, createStore } from 'redux'
import { deck } from './deck'

const reducer = combineReducers({ deck })
const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'DRAW_CARD' })
// 1
store.dispatch({ type: 'DRAW_CARD' })

store.dispatch({ type: 'SHUFFLE' })
// 2
store.dispatch({ type: 'DRAW_CARD' })
// 1
