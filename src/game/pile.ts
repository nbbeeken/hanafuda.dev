import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('hana-pile')
export class Pile extends LitElement {
	@property()
	public cards = []

	static styles = css`
		div {
			display: flex;
			align-items: center;
			justify-content: center;
			flex-flow: row wrap;
			align-content: flex-end;
		}
	`

	render() {
		return html`
			<div>
				${this.cards.map((card) => html`<hana-card .card=${card}></hana-card>`)}
			</div>
		`
	}
}
