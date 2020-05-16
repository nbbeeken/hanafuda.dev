import { combineReducers, createStore } from 'redux'
import { deckStore } from './deck'
import { playerStore } from './player'

const reducer = combineReducers({ deckStore, playerStore })
export const store = createStore(reducer)

store.subscribe(() => console.dir(store.getState()))
