import { wholeDeck } from '../hanafuda'

type DeckActionTypes = 'DRAW_CARD' | 'RESET' | 'SHUFFLE'

function shuffle(inputArray: object[]) {
	const shuffled = [...inputArray]

	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		const x = shuffled[i]
		shuffled[i] = inputArray[j]
		shuffled[j] = x
	}
	return shuffled
}

const initState = {
	currentCard: null,
	deck: wholeDeck(),
}

export function deckStore(state = initState, action: { type: DeckActionTypes }) {
	switch (action.type) {
		case 'DRAW_CARD':
			return { currentCard: state.deck[0], deck: [...state.deck.slice(1)] }
		case 'SHUFFLE':
			return {
				currentCard: state.currentCard,
				deck: shuffle(state.deck),
			}
		case 'RESET':
			return initState
		default:
			return state
	}
}
