import { customElement, html, LitElement, property } from 'lit-element'

@customElement('hana-pile')
export class Pile extends LitElement {
	@property()
	public cards = []

	render() {
		return html` <p>here</p> `
	}
}
