import { css, customElement, html, LitElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { HanaCard } from './hanafuda'

@customElement('hana-card')
export class CardView extends LitElement {
	classes: { faceDown: boolean }
	@property()
	get name() {
		return this.card.name
	}

	set faceDown(v) {
		this.classes.faceDown = v
	}

	@property({ type: HanaCard })
	public card: HanaCard

	constructor(card: HanaCard) {
		super()
		this.card = card
		this.classes = { faceDown: true }
	}

	static styles = css`
		div {
			height: 150px;
			width: 100px;
			border: maroon solid 2px;
			margin: 16px;
			padding: 16px;
		}
		.faceDown {
			background-color: maroon;
		}
	`

	render() {
		return html`
			<div class=${classMap(this.classes)}>
				<h4 class="title">${this.card.name}</h4>
				<h5 class="title">suit: ${this.card.month}</h5>
				<h6 class="title">points: ${this.card.value}</h6>
			</div>
		`
	}
}
