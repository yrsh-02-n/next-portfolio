import { defineField, defineType } from 'sanity'

export const headingBlockType = defineType({
	name: 'headingBlock',
	type: 'object',
	fields: [
		defineField({
			name: 'title',
			type: 'string'
		}),
		defineField({
			name: 'description',
			type: 'blockContent'
		}),
		defineField({
			name: 'btnText',
			type: 'string'
		}),
		defineField({
			name: 'btnUrl',
			type: 'string'
		}),
		defineField({
			name: 'image',
			type: 'image'
		})
	]
})
