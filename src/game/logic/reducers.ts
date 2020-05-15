import { combineReducers, createStore } from 'redux'
import { deckStore } from './deck'

const reducer = combineReducers({ deckStore })
export const store = createStore(reducer)

store.subscribe(() => console.log(store.getState()))
