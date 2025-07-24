import { defineField, defineType } from 'sanity'

export const heroScreenType = defineType({
	name: 'heroScreen',
	title: 'Hero Screen',
	type: 'document',
	fields: [
		// texts
		defineField({
			name: 'heroScreenTexts',
			title: 'Текст',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'line',
							title: 'Строки',
							type: 'array',
							of: [{ type: 'text', rows: 2 }],
							validation: Rule => Rule.required().min(1)
						})
					]
				}
			],
			validation: Rule => Rule.required().min(1)
		}),

		// buttons
		defineField({
			name: 'heroScreenLinks',
			title: 'Ссылки',
			type: 'array',
			of: [
				{
					type: 'object',
					fields: [
						defineField({
							name: 'title',
							type: 'string',
							validation: Rule => Rule.required()
						}),
						defineField({
							name: 'shortTitle',
							type: 'string',
							validation: Rule => Rule.required()
						}),
						defineField({
							name: 'url',
							type: 'string',
							validation: Rule => Rule.required()
						}),
						defineField({
							name: 'order',
							type: 'number',
							initialValue: 0,
							validation: Rule => Rule.required()
						})
					]
				}
			]
		})
	]
})
