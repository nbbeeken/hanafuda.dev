import { customElement, html, LitElement, property } from 'lit-element'

@customElement('hana-pile')
export class Pile extends LitElement {
	@property()
	public cards = []

	render() {
		return html`
			<ul>
				<p>${this.cards.length}</p>
				${this.cards.map((card) => html`<li><hana-card .card=${card}></hana-card></li>`)}
			</ul>
		`
	}
}
