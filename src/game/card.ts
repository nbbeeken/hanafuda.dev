import { css, customElement, html, LitElement, property } from 'lit-element'

@customElement('hana-card')
export class CardView extends LitElement {
	@property() name = 'Spring'

	static styles = css`
		div {
			outline: red;
		}
	`

	render() {
		return html`<div>Hanafuda ${this.name} Card!</div> `
	}
}
