import { customElement, html, LitElement, property } from 'lit-element'
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
	}

	drawCardHandler() {
		store.dispatch({ type: 'DRAW_CARD' })
	}

	numPlayersInputHandler(e) {
		this.numPlayers = +e.target.value
	}

	render() {
		const welcomeHtml = html`
			<div>
				Number of Players:
				<input
					id="numPlayers-input"
					type="number"
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
			<hana-pile .cards=${this.deck}></hana-pile>
		`

		return html`${this.gameStarted ? gameHtml : welcomeHtml}`
	}
}
