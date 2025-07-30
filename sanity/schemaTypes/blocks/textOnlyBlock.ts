import { defineField, defineType } from 'sanity'

export const textOnlyBlock = defineType({
	name: 'textOnlyBlock',
	title: 'Text Only Block',
	type: 'object',
	fields: [
		defineField({
			name: 'text',
			title: 'Text',
			type: 'blockContent'
		})
	],
	preview: {
		select: {
			text: 'text'
		},
	}
})
