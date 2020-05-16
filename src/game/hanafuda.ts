import emoji from '../emoji'

export enum Month {
	Jan = 'Jan',
	Feb = 'Feb',
	Mar = 'Mar',
	Apr = 'Apr',
	May = 'May',
	Jun = 'Jun',
	Jul = 'Jul',
	Aug = 'Aug',
	Sep = 'Sep',
	Oct = 'Oct',
	Nov = 'Nov',
	Dec = 'Dec',
}

export const enum Points {
	Twenty = 20,
	Ten = 10,
	Five = 5,
	One = 1,
}

interface HanaCardAttributes {
	isScroll?: boolean
	isAnimal?: boolean
	hasPoetry?: boolean
	isBasic?: boolean
}

const EMOJI_MAP = new Map([
	[Month.Jan, '🌿'],
	[Month.Feb, '🌼'],
	[Month.Mar, '🌸'],
	[Month.Apr, '🌱'],
	[Month.May, '🌷'],
	[Month.Jun, '🏵️'],
	[Month.Jul, '🍀'],
	[Month.Aug, '🏜️'],
	[Month.Sep, '🌺'],
	[Month.Oct, '🍁'],
	[Month.Nov, '🌳'],
	[Month.Dec, '💮'],
])

export class HanaCard {
	attributes: HanaCardAttributes
	emojis: string[]
	constructor(
		public month: Month,
		public name: string,
		public value: Points,
		// attributes
		attributes: HanaCardAttributes,
		emojiString = ''
	) {
		const defaultAttributes = { isScroll: false, isAnimal: false, isBasic: false, isWrittenOn: false }
		this.attributes = { ...defaultAttributes, ...attributes }
		const emojis = EMOJI_MAP.get(this.month) + emojiString

		this.emojis = []
		for (const emojiChar of emojis) {
			const codePoint = emojiChar.codePointAt(0).toString(16).toUpperCase()
			if (codePoint !== 'FE0F') {
				this.emojis.push(emoji[codePoint])
			}
		}
	}

	get description() {
		return `HanaCard(month: ${this.month}, name: ${this.name}, points: ${this.value})`
	}
	get id() {
		return `${this.month}_${this.name}_${this.value}`
	}
}

type Suit = [HanaCard, HanaCard, HanaCard, HanaCard]

const JanSuit: Suit = [
	new HanaCard(Month.Jan, 'crane', Points.Twenty, { isAnimal: true }, '🏗️'),
	new HanaCard(Month.Jan, 'red_scroll_writing', Points.Five, { isScroll: true, hasPoetry: true }, '🧧📜🖌️'),
	new HanaCard(Month.Jan, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Jan, 'basic1', Points.One, { isBasic: true }),
]

const FebSuit: Suit = [
	new HanaCard(Month.Feb, 'red_scroll_writing', Points.Five, { isScroll: true, hasPoetry: true }, '🧧📜🖌️'),
	new HanaCard(Month.Feb, 'bush_warbler', Points.Ten, { isAnimal: true }, '🐦'),
	new HanaCard(Month.Feb, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Feb, 'basic1', Points.One, { isBasic: true }),
]

const MarSuit: Suit = [
	new HanaCard(Month.Mar, 'curtain', Points.Twenty, { isAnimal: true }, '🏕️'),
	new HanaCard(Month.Mar, 'red_scroll_writing', Points.Five, { isScroll: true, hasPoetry: true }, '🧧📜🖌️'),
	new HanaCard(Month.Mar, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Mar, 'basic1', Points.One, { isBasic: true }),
]

const AprSuit: Suit = [
	new HanaCard(Month.Apr, 'red_scroll', Points.Five, { isScroll: true }, '🧧📜'),
	new HanaCard(Month.Apr, 'cuckoo', Points.Ten, { isAnimal: true }, '🐓'),
	new HanaCard(Month.Apr, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Apr, 'basic1', Points.One, { isBasic: true }),
]

const MaySuit: Suit = [
	new HanaCard(Month.May, 'red_scroll', Points.Five, { isScroll: true }, '🧧📜'),
	new HanaCard(Month.May, 'docks', Points.Ten, { isBasic: false }, '⛵️'),
	new HanaCard(Month.May, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.May, 'basic1', Points.One, { isBasic: true }),
]

const JunSuit: Suit = [
	new HanaCard(Month.Jun, 'purple_scroll', Points.Five, { isScroll: true }, '💜📜'),
	new HanaCard(Month.Jun, 'butterflies', Points.Ten, { isAnimal: true }, '🦋'),
	new HanaCard(Month.Jun, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Jun, 'basic1', Points.One, { isBasic: true }),
]

const JulSuit: Suit = [
	new HanaCard(Month.Jul, 'red_scroll', Points.Five, { isScroll: true }, '🧧📜'),
	new HanaCard(Month.Jul, 'boar', Points.Ten, { isAnimal: true }, '🐗'),
	new HanaCard(Month.Jul, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Jul, 'basic1', Points.One, { isBasic: true }),
]

const AugSuit: Suit = [
	new HanaCard(Month.Aug, 'moon', Points.Twenty, { isBasic: false }, '🌝'),
	new HanaCard(Month.Aug, 'geese', Points.Ten, { isAnimal: true }, '🦢'),
	new HanaCard(Month.Aug, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Aug, 'basic1', Points.One, { isBasic: true }),
]

const SepSuit: Suit = [
	new HanaCard(Month.Sep, 'purple_scroll', Points.Five, { isScroll: true }, '💜📜'),
	new HanaCard(Month.Sep, 'sake', Points.Ten, { isBasic: false, hasPoetry: true }, '🍶'),
	new HanaCard(Month.Sep, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Sep, 'basic1', Points.One, { isBasic: true }),
]

const OctSuit: Suit = [
	new HanaCard(Month.Oct, 'purple_scroll', Points.Five, { isScroll: true }, '💜📜'),
	new HanaCard(Month.Oct, 'doe', Points.Ten, { isAnimal: true }, '🦌'),
	new HanaCard(Month.Oct, 'basic0', Points.One, { isBasic: true }),
	new HanaCard(Month.Oct, 'basic1', Points.One, { isBasic: true }),
]

const NovSuit: Suit = [
	new HanaCard(Month.Nov, 'red_scroll', Points.Five, { isScroll: true }, '🧧📜'),
	new HanaCard(Month.Nov, 'umbrella', Points.Twenty, { isAnimal: true }, '⛱'),
	new HanaCard(Month.Nov, 'swallow', Points.Ten, { isBasic: false }, '🦜'),
	new HanaCard(Month.Nov, 'lightning', Points.One, { isBasic: false }, '⚡️'),
]

const DecSuit: Suit = [
	new HanaCard(Month.Dec, 'phoenix', Points.Twenty, { isAnimal: true }, '🦚'),
	new HanaCard(Month.Dec, 'basic0', Points.Ten, { isBasic: true }),
	new HanaCard(Month.Dec, 'basic1', Points.One, { isBasic: true }),
	new HanaCard(Month.Dec, 'basic2', Points.One, { isBasic: true }),
]

export const DECK = new Map([
	[Month.Jan, JanSuit],
	[Month.Feb, FebSuit],
	[Month.Mar, MarSuit],
	[Month.Apr, AprSuit],
	[Month.May, MaySuit],
	[Month.Jun, JunSuit],
	[Month.Jul, JulSuit],
	[Month.Aug, AugSuit],
	[Month.Sep, SepSuit],
	[Month.Oct, OctSuit],
	[Month.Nov, NovSuit],
	[Month.Dec, DecSuit],
])

export const wholeDeck = () => [...DECK.values()].flatMap((v) => v)

const s = new Set()
for (const card of wholeDeck()) {
	card.emojis.forEach((v) => s.add(v))
}
console.log(s)

export const NumberCardsPerPlayer = new Map([
	[2, { hand: 8, field: 8 }],
	[3, { hand: 7, field: 6 }],
	[4, { hand: 5, field: 8 }],
	[5, { hand: 4, field: 8 }],
	[6, { hand: 3, field: 12 }],
	[7, { hand: 3, field: 6 }],
])
