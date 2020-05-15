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

export function deck(state = wholeDeck(), action: { type: DeckActionTypes }) {
	switch (action.type) {
		case 'DRAW_CARD':
			return [...state.slice(1)]
		case 'SHUFFLE':
			return shuffle(state)
		case 'RESET':
			return wholeDeck()
		default:
			return state
	}
}
