import { customElement, html, LitElement, property } from 'lit-element'
import { NumberCardsPerPlayer } from './hanafuda'
import { AddCardAction, AddPlayerAction } from './logic/player'
import { store } from './logic/reducers'

@customElement('hana-board')
export class BoardView extends LitElement {
	@property() gameStarted = false
	@property() numPlayers = 2
	@property({ type: Array }) deck = []
	@property({ type: Array }) discardPile = []
	@property({ type: Array }) fieldCards = []

	constructor() {
		super()
		store.subscribe(() => {
			this.deck = store.getState().deckStore.deck
		})
	}

	playButtonHandler() {
		this.gameStarted = true
		store.dispatch({ type: 'SHUFFLE' })

		for (let i = 0; i < this.numPlayers; i++) {
			const action: AddPlayerAction = {
				type: 'ADD_PLAYER',
				name: `player_${i}`,
			}
			store.dispatch(action)
		}

		const numCards = NumberCardsPerPlayer.get(this.numPlayers)
		const { hand: numHandCards, field: numFieldCards } = numCards

		for (let i = 0; i < numHandCards * this.numPlayers; i++) {
			store.dispatch({ type: 'DRAW_CARD' })

			const action: AddCardAction = {
				type: 'ADD_CARD',
				player: store.getState().playerStore[i % this.numPlayers].name,
				card: store.getState().deckStore.currentCard,
			}
			store.dispatch(action)
		}
		for (let i = 0; i < numFieldCards; i++) {
			store.dispatch({ type: 'DRAW_CARD' })
			this.fieldCards.push(store.getState().deckStore.currentCard)
		}
	}

	drawCardHandler() {
		store.dispatch({ type: 'DRAW_CARD' })
	}

	numPlayersInputHandler(e) {
		this.numPlayers = +e.target.value
	}

	render() {
		const welcomeHtml = html`
			<h1>${'🎴'.codePointAt(0).toString(16)}</h1>
			<div>
				Number of Players:
				<input
					id="numPlayers-input"
					type="number"
					min="1"
					max="7"
					value="${this.numPlayers}"
					@change=${this.numPlayersInputHandler}
				/>
			</div>

			<div>
				<button class="button" @click=${this.playButtonHandler}>Play!</button>
			</div>
		`
		const gameHtml = html`
			<h1>Playing with ${this.numPlayers} players!</h1>
			<button class="button" @click=${this.drawCardHandler}>Draw Card!</button>
			<hana-pile .cards=${this.fieldCards}></hana-pile>
		`

		return html`${this.gameStarted ? gameHtml : welcomeHtml}`
	}
}
