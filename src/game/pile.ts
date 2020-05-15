import { customElement, html, LitElement, property } from 'lit-element'

@customElement('hana-pile')
export class Pile extends LitElement {
	@property()
	public cards = []

	render() {
		return html`
			<ul>
				${this.cards.map((card) => card)}
			</ul>
		`
	}
}
