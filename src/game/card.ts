import { css, customElement, html, LitElement, property } from 'lit-element'
import { DECK, HanaCard, Month } from './hanafuda'

@customElement('hana-card')
export class CardView extends LitElement {
	@property()
	get name() {
		return this.card.name
	}

	@property({ type: HanaCard })
	public card: HanaCard

	constructor() {
		super()
		this.card = DECK.get(Month.Jan)[0]
	}

	static styles = css`
		div {
			outline: red solid 1px;
		}
	`

	render() {
		return html`<div class="tile">Hanafuda ${this.name} Card!</div>`
	}
}
