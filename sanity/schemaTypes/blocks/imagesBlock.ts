import { defineField, defineType } from 'sanity'

export const imagesBlockType = defineType({
	name: 'multipleCaseImages',
	title: 'Case images',
	type: 'object',
	fields: [
		defineField({
			name: 'images',
			title: 'Images',
			type: 'array',
			of: [
				{
					type: 'image'
				}
			]
		})
	],
	preview: {
		select: {
			images: 'images',
			layout: 'layout'
		}
	}
})
