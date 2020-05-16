import { css, customElement, html, LitElement, property } from 'lit-element'
import { classMap } from 'lit-html/directives/class-map'
import { HanaCard } from './hanafuda'

@customElement('hana-card')
export class CardView extends LitElement {
	classes: { faceDown: boolean; animate__flipInX: true }
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
		this.classes = { faceDown: true, animate__flipInX: true }
	}

	static styles = css`
		div {
			height: 150px;
			width: 100px;
			border: maroon solid 2px;
			margin: 16px;
			padding: 16px;
			box-shadow: 6px 6px 5px -4px rgba(0, 0, 0, 0.75);
			color: white;
		}
		h1 {
			text-align: center;
			margin: 1px;
			font-size: 23px;
		}
		p {
			margin-top: 0.3em;
			margin-bottom: 0.3em;
		}
		.faceDown {
			background-color: maroon;
		}
		.points {
			color: gold;
		}
		.month {
			color: #7fbfbf;
		}
	`

	render() {
		return html`
			<div class=${classMap(this.classes)} alt="${this.card.id}">
				<p>${this.card.name.split('_').join(' ')}</p>
				${this.card.emojis.map((e) => html`<img height="40px" width="40px" src="${e}" />`)}
				<p class="month">${this.card.month}</p>
				<p class="points">${this.card.value}</p>
			</div>
		`
	}
}
