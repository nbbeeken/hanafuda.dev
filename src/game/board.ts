import { customElement, html, LitElement, property } from 'lit-element'
import { wholeDeck } from './hanafuda'

@customElement('hana-board')
export class BoardView extends LitElement {
	@property() gameStarted = false
	@property() numPlayers = 2
	@property({ type: Array }) fullDeck = []
	@property({ type: Array }) discardPile = []
	@property({ type: Array }) fieldCards = []

	playButtonHandler() {
		this.fullDeck = wholeDeck()
		this.gameStarted = true
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
			<hana-pile .cards=${this.fullDeck}></hana-pile>
			<!-- <hana-pile .cards=${[]}></hana-pile>
			<hana-pile .cards=${[]}></hana-pile> -->
		`

		return html`${this.gameStarted ? gameHtml : welcomeHtml}`
	}
}
