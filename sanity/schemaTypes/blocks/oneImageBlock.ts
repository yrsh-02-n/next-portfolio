import { defineField, defineType } from 'sanity'

export const oneImageBlockType = defineType({
	name: 'caseOneImage',
	title: 'Case single image',
	type: 'object',
	fields: [
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image'
		}),
		defineField({
			name: 'alt',
			title: 'Alternative text',
			type: 'string',
			description: 'Important for SEO and accessibility'
		})
	]
})
