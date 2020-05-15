import type { HanaCard } from '../hanafuda'

export class Player {
	constructor(public name: string, public matches: [HanaCard, HanaCard][] = [], public hand: HanaCard[] = []) {}

	get score() {
		return this.matches.reduce((acc, current) => acc + current[0].value + current[1].value, 0)
	}

	clone() {
		return new Player(this.name, this.matches, this.hand)
	}
}
export interface AddPlayerAction {
	type: 'ADD_PLAYER'
	name: string
}
export interface AddCardAction {
	type: 'ADD_CARD'
	player: string
	card: HanaCard
}
export interface SetTurn {
	type: 'ADD_CARD'
	player: string
	card: HanaCard
}
type PlayersAction = AddPlayerAction | AddCardAction
export function playerStore(state: Player[] = [], action: PlayersAction) {
	switch (action.type) {
		case 'ADD_PLAYER':
			return [new Player(action.name), ...state]
		case 'ADD_CARD':
			return state.map((p) => {
				if (p.name == action.player) {
					const newPlayer = p.clone()
					newPlayer.hand.push(action.card)
					return newPlayer
				}
				return p
			})
		default:
			return state
	}
}
