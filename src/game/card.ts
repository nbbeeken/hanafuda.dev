import { css, customElement, html, LitElement, property } from 'lit-element'
import { HanaCard } from './hanafuda'

@customElement('hana-card')
export class CardView extends LitElement {
	@property()
	get name() {
		return this.card.name
	}

	@property({ type: HanaCard })
	public card: HanaCard

	constructor(card: HanaCard) {
		super()
		this.card = card
	}

	static styles = css`
		div {
			height: 200px;
			width: 150px;
			border: maroon solid 2px;
			margin: 16px;
			padding: 16px;
		}
	`

	render() {
		return html`
			<div>
				<h4 class="title">name: ${this.card.name}</h4>
				<h5 class="title">suit: ${this.card.month}</h5>
				<h6 class="title">points: ${this.card.value}</h6>
			</div>
		`
	}
}
